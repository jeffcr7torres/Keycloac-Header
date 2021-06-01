import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
     *Constructor para la clase authservice
     */
     constructor(private keycloackService: KeycloakService) {

    }

    getLoggedUser(){
        try {
            let userDetails = this.keycloackService.getKeycloakInstance().idTokenParsed;
            console.log("Destalles del usuario: ", userDetails);
            let userRoles = this.keycloackService.getUserRoles();
            console.log("Roles del usuario: ", userRoles);
                return userDetails;
        } catch (error) {
            console.log('No se pudo obtener información del usuario' ,error);
            return undefined
        }
    }

    logout(){
        this.keycloackService.logout();
    }
}
