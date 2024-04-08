import { Organisation, OrganisationRole } from "@/Generated/Raidv2";
import dayjs from "dayjs";

import organisationRole from "@/references/organisation_role.json";
import organisationRoleSchema from "@/references/organisation_role_schema.json";

const organisationRoleGenerator = (): OrganisationRole => {
  return {
    id: organisationRole[0].uri,
    schemaUri: organisationRoleSchema[0].uri,
    startDate: dayjs().format("YYYY-MM-DD"),
  };
};

export const organisationGenerator = (): Organisation => {
  return {
    id: "https://ror.org/038sjwq14",
    schemaUri: "https://ror.org/",
    role: [organisationRoleGenerator()],
  };
};
