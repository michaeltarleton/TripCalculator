import { Component, Input, OnInit } from '@angular/core'
import { Friend } from '@app/core/services/friend.interface'
import { PurchasedItem } from '@app/core/services/purchased-item.interface'

interface PayoutSchedule {
  from: string
  to: string
  amount: number
  remaining: number
}
@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css'],
})
export class CalculationCardComponent implements OnInit {
  @Input()
  cards: ReadonlyArray<Friend> | undefined

  constructor() {}

  ngOnInit() {}

  calculate(): void {
    // tslint:disable-next-line:no-if-statement
    if (!this.cards) {
      return
    }

    const count = this.cards.length

    const totals = this.cards.map(f => ({
      ...f,
      total: f.purchasedItems.reduce((a: number, c: PurchasedItem) => a + c.price, 0),
    }))

    const totalSpent = totals.reduce((a, c) => a + c.total, 0)

    const average = totalSpent / count

    const balances = totals.map(f => ({ ...f, balance: f.total - average }))

    const sortedBalances = balances.sort((a, b) => (a.balance > b.balance ? 1 : a.balance < b.balance ? -1 : 0))

    // tslint:disable-next-line:readonly-array
    const payouts: PayoutSchedule[] = []

    for (let i = 0; i < count; i++) {
      for (let j = count - 1; j > 0; j--) {
        // tslint:disable-next-line:no-if-statement
        if (sortedBalances[i].balance === sortedBalances[j].balance) {
          break
        }
        // Handle when [i] needs to be paid by [j]
        // tslint:disable-next-line:no-if-statement
        if (sortedBalances[i].balance > 0 && sortedBalances[j].balance < 0) {
          const amount = this.calculateAmountToPay(sortedBalances[i].balance, sortedBalances[j].balance)
          const remaining = sortedBalances[i].balance - amount
          payouts.push({
            from: sortedBalances[j].id,
            to: sortedBalances[i].id,
            amount,
            remaining,
          })
          sortedBalances[i].balance -= amount
          sortedBalances[j].balance += amount

          // tslint:disable-next-line:no-if-statement
          if (remaining === 0) {
            break
          }
        }
        // Handle when [i] needs to pay [j]
        // tslint:disable-next-line:no-if-statement
        if (sortedBalances[i].balance < 0 && sortedBalances[j].balance > 0) {
          const amount = this.calculateAmountToPay(sortedBalances[j].balance, sortedBalances[i].balance)
          const remaining = sortedBalances[j].balance - amount
          payouts.push({
            from: sortedBalances[i].id,
            to: sortedBalances[j].id,
            amount,
            remaining,
          })
          sortedBalances[i].balance += amount
          sortedBalances[j].balance -= amount

          // tslint:disable-next-line:no-if-statement
          if (remaining === 0) {
            break
          }
        }
      }
    }
  }

  private calculateAmountToPay(amountOwed: number, amountToPay: number): number {
    return amountOwed === amountToPay
      ? amountToPay
      : amountOwed > amountToPay
      ? amountToPay
      : amountOwed < amountToPay
      ? amountOwed
      : 0
  }
}

// balance > 0; needs to be paid
// balance < 0; needs to pay someone
