import { Component, Input, OnInit } from '@angular/core'

import { Friend } from '@app/core/services/friend.interface'
import { PayoutSchedule, PayoutService } from '../payout.service'

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css'],
})
export class CalculationCardComponent implements OnInit {
  @Input()
  cards: ReadonlyArray<Friend> | undefined
  payoutSchedules: ReadonlyArray<PayoutSchedule> | undefined
  showPayoutSchedule = false
  hasRunOnce = false
  displayedColumns: ReadonlyArray<any> = ['step', 'from', 'to', 'amount']

  constructor(private payoutService: PayoutService) {}

  ngOnInit() {}

  calculate(): void {
    this.payoutSchedules = this.payoutService.calculatePayoutSchedules(this.cards)
    this.showPayoutSchedule = this.payoutSchedules ? this.payoutSchedules.length > 0 : false
    this.hasRunOnce = true
  }
}
