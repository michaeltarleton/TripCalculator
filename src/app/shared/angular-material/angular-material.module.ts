import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const modules: ReadonlyArray<any> = [BrowserAnimationsModule]

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class AngularMaterialModule {}
