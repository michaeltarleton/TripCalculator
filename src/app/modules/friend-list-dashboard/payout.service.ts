import { Injectable } from '@angular/core'

import { Friend } from '@app/core/services/friend.interface'
import { PurchasedItem } from '@app/core/services/purchased-item.interface'
import { FriendListDashboardModule } from './friend-list-dashboard.module'

export interface PayoutSchedule {
  from: Friend
  to: Friend
  amount: number
  remaining: number
}

@Injectable({
  providedIn: FriendListDashboardModule,
})
export class PayoutService {
  constructor() {}

  public calculatePayoutSchedules(cards: ReadonlyArray<Friend> | undefined): ReadonlyArray<PayoutSchedule> | undefined {
    // tslint:disable-next-line:no-if-statement
    if (!cards) {
      return undefined
    }

    const count = cards.length

    const totals = cards.map(f => ({
      ...f,
      total: f.purchasedItems.reduce((a: number, c: PurchasedItem) => a + c.price, 0),
    }))

    const totalSpent = totals.reduce((a, c) => a + c.total, 0)

    const average = totalSpent / count

    const balances = totals.map(f => ({ ...f, balance: f.total - average }))

    const positiveBalances = balances.filter(f => f.balance > 0)
    const negativeBalances = balances.filter(f => f.balance < 0)

    // tslint:disable-next-line:readonly-array
    const payouts: PayoutSchedule[] = []

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < positiveBalances.length; i++) {
      while (positiveBalances[i].balance > 0) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < negativeBalances.length; j++) {
          // tslint:disable-next-line:no-if-statement
          if (negativeBalances[j].balance >= 0) {
            continue
          }

          const amountToPay = Math.abs(
            positiveBalances[i].balance + negativeBalances[j].balance === 0
              ? negativeBalances[j].balance
              : positiveBalances[i].balance + negativeBalances[j].balance > 0
              ? negativeBalances[j].balance
              : positiveBalances[i].balance + negativeBalances[j].balance < 0
              ? positiveBalances[i].balance
              : 0
          )

          // tslint:disable-next-line:no-if-statement
          if (amountToPay !== 0) {
            payouts.push({
              from: negativeBalances[j],
              to: positiveBalances[i],
              amount: amountToPay,
              remaining: positiveBalances[i].balance - amountToPay,
            })

            positiveBalances[i].balance -= amountToPay
            negativeBalances[j].balance += amountToPay
          }
        }
      }
    }

    return payouts
  }
}
