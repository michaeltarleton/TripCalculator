import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FriendListDashboardComponent } from './friend-list-dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: FriendListDashboardComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendListDashboardRoutingModule {}
