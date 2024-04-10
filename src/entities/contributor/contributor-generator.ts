import contributorRole from "@/references/contributor_role.json";
import contributorRoleSchema from "@/references/contributor_role_schema.json";
import dayjs from "dayjs";

import {
  Contributor,
  ContributorPosition,
  ContributorRole,
} from "@/Generated/Raidv2";

const contributorPositionGenerator = (): ContributorPosition => {
  

  return {
    schemaUri: "https://vocabulary.raid.org/contributor.position.schema/305",
    id: "https://vocabulary.raid.org/contributor.position.schema/307",
    startDate: dayjs().format("YYYY-MM-DD"),
  };
};

const contributorRoleGenerator = (): ContributorRole => {
  return {
    schemaUri: contributorRoleSchema[0].uri,
    id: contributorRole[Math.floor(Math.random() * contributorRole.length)].uri,
  };
};

export const contributorGenerator = (): Contributor => {
  return {
    id: "https://orcid.org/0009-0000-9306-3120",
    leader: true,
    contact: true,
    schemaUri: "https://orcid.org/",
    position: [contributorPositionGenerator()],
    role: [contributorRoleGenerator()],
  };
};
