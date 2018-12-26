import { NgModule } from '@angular/core'

import { SharedModule } from '@app/shared/shared.module'
import { FriendListDashboardModule } from './friend-list-dashboard/friend-list-dashboard.module'

@NgModule({
  imports: [SharedModule, FriendListDashboardModule],
  declarations: [],
  exports: [],
})
export class ModulesModule {}
