import { NgModule } from '@angular/core'
import { SharedModule } from '@app/shared/shared.module'
import { FriendListDashboardComponent } from './friend-list-dashboard.component'
import { FriendComponent } from './friend/friend.component'
import { PurchasedItemComponent } from './purchased-item/purchased-item.component'

@NgModule({
  imports: [SharedModule],
  declarations: [FriendListDashboardComponent, FriendComponent, PurchasedItemComponent],
  exports: [FriendListDashboardComponent, FriendComponent, PurchasedItemComponent],
})
export class FriendListDashboardModule {}
