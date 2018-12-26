import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'

@NgModule({
  imports: [SharedModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [SharedModule],
  declarations: [NavbarComponent],
})
export class CoreModule {}
