import { NgModule } from '@angular/core'

import { SharedModule } from '@app/shared/shared.module'
import { FriendListDashboardComponent } from './friend-list-dashboard/friend-list-dashboard.component'

@NgModule({
  imports: [SharedModule],
  declarations: [FriendListDashboardComponent],
})
export class ModulesModule {}
