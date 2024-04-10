import {
  Access,
  AccessStatement,
  AccessType,
  Language,
} from "@/Generated/Raidv2";
import accessType from "@/references/access_type.json";
import accessTypeSchema from "@/references/access_type_schema.json";
import languageSchema from "@/references/language_schema.json";
import dayjs from "dayjs";

const latestAccessTypeSchemaId = Math.max(accessType.map((el) => el.schema_id).sort()[0]);

const accessTypeGenerator = (): AccessType => {
  return {
    id: accessType.filter((el) => el.schema_id === latestAccessTypeSchemaId)[0].uri,
    schemaUri: accessTypeSchema.filter((el) => el.status === "active")[0].uri,
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
