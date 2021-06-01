import {KeycloakService, KeycloakOptions} from 'keycloak-angular';
import { AppConfigType } from '../environments/AppConfigType';
export function InicializarKeycloack(Keycloak: KeycloakService): () => Promise<any>{
    const options: KeycloakOptions = {
        config: AppConfigType.KeycloackConfig,
        initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          enableBearerInterceptor: true,
          loadUserProfileAtStartUp: true
    };
    return (): Promise<any> => Keycloak.init(options);
}