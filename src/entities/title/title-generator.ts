import { Language, RaidDto, Title, TitleType } from "@/Generated/Raidv2";
import languageSchema from "@/references/language_schema.json";
import titleType from "@/references/title_type.json";
import titleTypeSchema from "@/references/title_type_schema.json";
import dayjs from "dayjs";
import { UseFieldArrayReturn } from "react-hook-form";

const titleTypeGenerator = (
  titlesFieldArray?: UseFieldArrayReturn<RaidDto, "title">
): TitleType => {
  const typeId =
    (titlesFieldArray?.fields && titlesFieldArray?.fields?.length > 0
      ? titleType.find((el) => el.uri.includes("alternative"))?.uri
      : titleType.find((el) => el.uri.includes("primary"))?.uri) || "";
  return {
    id: typeId,
    schemaUri: titleTypeSchema[0].uri,
  };
};

const titleLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: languageSchema[0].uri,
  };
};

export const titleGenerator = (
  titlesFieldArray?: UseFieldArrayReturn<RaidDto, "title">
): Title => {
  const todaysDate = dayjs(new Date()).format("YYYY-MM-DD");

  return {
    text: `Example title... ${new Date().toLocaleTimeString()}`,
    type: titleTypeGenerator(titlesFieldArray),
    language: titleLanguageGenerator(),
    startDate: todaysDate,
    endDate: undefined,
  };
};
