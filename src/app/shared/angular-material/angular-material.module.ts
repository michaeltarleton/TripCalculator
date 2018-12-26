import { NgModule } from '@angular/core'
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const modules: ReadonlyArray<any> = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
]

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class AngularMaterialModule {}
