import { NgModule } from '@angular/core'
import {} from '@angular/material'

import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  imports: [SharedModule, RouterModule],
  exports: [SharedModule, NavbarComponent],
  declarations: [NavbarComponent],
})
export class CoreModule {}
