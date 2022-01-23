import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiUrlInterceptor } from './commanders/interceptor/api-url/api-url.interceptor';
import { ErrorInterceptor } from './commanders/interceptor/error/error.interceptor';
import { AuthInterceptor } from './commanders/interceptor/auth/auth.interceptor';
import { BackendInterceptor } from './commanders/interceptor/backend/backend.interceptor';
import { MENU_ROUTES, MenuRoutes } from './lib/config/menu-config';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true },
    { provide: MENU_ROUTES, useValue: MenuRoutes },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
