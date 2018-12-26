import { LayoutModule } from '@angular/cdk/layout'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material'

const modules: ReadonlyArray<any> = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatMenuModule,
  MatTableModule,
]

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class AngularMaterialModule {}
