import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
  ;
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationInterceptor } from './utilities/interceptors/auth-interceptor';
import { ErrorInterceptor } from './utilities/interceptors/error-interceptor';
import { SharedcomponentModule } from './sharedcomponent/sharedcomponent.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedcomponentModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
