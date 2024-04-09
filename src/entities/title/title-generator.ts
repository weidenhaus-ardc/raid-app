import { Language, RaidDto, Title, TitleType } from "@/Generated/Raidv2";
import titleType from "@/references/title_type.json";
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
    schemaUri: "https://github.com/au-research/raid-metadata/tree/main/scheme/title/type/v1",
  };
};

const titleLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: "https://www.iso.org/standard/39534.html",
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
