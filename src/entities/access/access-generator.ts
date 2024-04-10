import {
  Access,
  AccessStatement,
  AccessType,
  Language,
} from "@/Generated/Raidv2";
import languageSchema from "@/references/language_schema.json";
import dayjs from "dayjs";

const accessTypeGenerator = (): AccessType => {
  return {
    id: "https://vocabularies.coar-repositories.org/access_rights/c_abf2/",
    schemaUri: "https://vocabularies.coar-repositories.org/access_rights/",
  };
};

const accessStatementLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: languageSchema.filter((el) => el.status === "active")[0].uri
  };
};

const accessStatementGenerator = (): AccessStatement => {
  return {
    text: `Access statement example text...`,
    language: accessStatementLanguageGenerator(),
  };
};

export const accessGenerator = (): Access => {
  const threeYearsFromNow = dayjs().add(1, "year").toDate();
  return {
    type: accessTypeGenerator(),
    statement: accessStatementGenerator(),
    embargoExpiry: threeYearsFromNow,
  };
};
