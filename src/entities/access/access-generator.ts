import {
  Access,
  AccessStatement,
  AccessType,
  Language,
} from "@/Generated/Raidv2";
import accessType from "@/references/access_type.json";
import dayjs from "dayjs";

const accessTypeGenerator = (): AccessType => {
  return {
    id: accessType[1].uri,
    schemaUri: "https://github.com/au-research/raid-metadata/tree/main/scheme/access/type/v1"
  };
};

const accessStatementLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: "https://www.iso.org/standard/39534.html",
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
