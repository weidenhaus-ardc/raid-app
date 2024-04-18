import { useCustomKeycloak } from "@/hooks/useCustomKeycloak";

export function useAuthHelper() {
  const { keycloak } = useCustomKeycloak();

  const hasServicePointGroup =
    keycloak.tokenParsed?.service_point_group_id !== undefined;

  const isServicePointUser =
    keycloak.tokenParsed?.realm_access?.roles?.includes("service-point-user");

  // Return these values from the hook
  return { hasServicePointGroup, isServicePointUser };
}
