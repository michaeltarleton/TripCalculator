import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '@app/shared/shared.module'
import { CalculationCardComponent } from './calculation-card/calculation-card.component'
import { FriendListDashboardRoutingModule } from './friend-list-dashboard-routing.module'
import { FriendListDashboardComponent } from './friend-list-dashboard.component'
import { FriendComponent } from './friend/friend.component'
import { PayoutService } from './payout.service'
import { PurchasedItemComponent } from './purchased-item/purchased-item.component'

@NgModule({
  imports: [SharedModule, FriendListDashboardRoutingModule, FormsModule],
  exports: [FriendListDashboardComponent, FriendComponent, PurchasedItemComponent],
  declarations: [FriendListDashboardComponent, FriendComponent, PurchasedItemComponent, CalculationCardComponent],
  providers: [PayoutService],
})
export class FriendListDashboardModule {}
