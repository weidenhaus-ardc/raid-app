import Keycloak, { KeycloakConfig } from "keycloak-js";

export const url = import.meta.env.VITE_KEYCLOAK_URL;
export const clientId = "redbox";
export const realm = import.meta.env.VITE_KEYCLOAK_REALM;

const keycloakConfig: KeycloakConfig = {
  url,
  realm,
  clientId,
};

export default new Keycloak(keycloakConfig);
