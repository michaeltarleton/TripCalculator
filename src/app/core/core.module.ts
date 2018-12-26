import { NgModule } from '@angular/core'
import {} from '@angular/material'

import { SharedModule } from '../shared/shared.module'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  imports: [SharedModule],
  exports: [SharedModule],
  declarations: [NavbarComponent],
})
export class CoreModule {}
