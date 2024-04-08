import { Language, Subject, SubjectKeyword } from "@/Generated/Raidv2";

import languageSchema from "@/references/language_schema.json";

import subjectType from "@/references/subject_type.json";
import subjectTypeSchema from "@/references/subject_type_schema.json";

const subjectKeywordLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: languageSchema[0].uri,
  };
};

export const subjectKeywordGenerator = (): SubjectKeyword => {
  return {
    text: `Subject keyword example text...`,
    language: subjectKeywordLanguageGenerator(),
  };
};
export const subjectGenerator = (): Subject => {
  const randomIndex = Math.floor(Math.random() * subjectType.length);
  return {
    id: subjectType[randomIndex].id,
    schemaUri: subjectTypeSchema[0].uri,
    keyword: [subjectKeywordGenerator()],
  };
};
