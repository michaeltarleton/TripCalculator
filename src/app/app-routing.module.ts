import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FriendListDashboardComponent } from './modules/friend-list-dashboard/friend-list-dashboard.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'friends',
  },

  {
    path: 'friends',
    component: FriendListDashboardComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
