import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
