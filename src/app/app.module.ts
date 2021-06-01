import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {InicializarKeycloack} from './AppInit';
import {AuthService} from './services/authentication/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: InicializarKeycloack,
      multi: true,
      deps:[KeycloakService]
    }, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
