import {
  Description,
  DescriptionType,
  Language,
  RaidDto,
} from "@/Generated/Raidv2";
import { UseFieldArrayReturn } from "react-hook-form";

import descriptionType from "@/references/description_type.json";
import descriptionTypeSchema from "@/references/description_type_schema.json";
import languageSchema from "@/references/language_schema.json";

const descriptionTypeGenerator = (
  descriptionsFieldArray?: UseFieldArrayReturn<RaidDto, "description">
): DescriptionType => {
  const typeId =
    descriptionsFieldArray?.fields && descriptionsFieldArray?.fields?.length > 0
      ? descriptionType.find((el) => el.uri.includes("alternative"))?.uri
      : descriptionType.find((el) => el.uri.includes("primary"))?.uri;
  return {
    id: typeId || "",
    schemaUri: descriptionTypeSchema[0].uri,
  };
};

const descriptionLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: languageSchema[0].uri,
  };
};

export const descriptionGenerator = (
  descriptionsFieldArray?: UseFieldArrayReturn<RaidDto, "description">
): Description => {
  return {
    text: `Description text`,
    type: descriptionTypeGenerator(descriptionsFieldArray),
    language: descriptionLanguageGenerator(),
  };
};
