import { Language, Title, TitleType } from "@/Generated/Raidv2";
import dayjs from "dayjs";

const titleTypeGenerator = (): TitleType => {
  return {
    id: "https://vocabulary.raid.org/title.type.schema/5",
    schemaUri: "https://vocabulary.raid.org/title.type.schema/376",
  };
};

const titleLanguageGenerator = (): Language => {
  return {
    id: "eng",
    schemaUri: "https://www.iso.org/standard/74575.html",
  };
};

export const titleGenerator = (): Title => {
  const todaysDate = dayjs(new Date()).format("YYYY-MM-DD");

  return {
    text: `Example title... ${new Date().toLocaleTimeString()}`,
    type: titleTypeGenerator(),
    language: titleLanguageGenerator(),
    startDate: todaysDate,
    endDate: undefined,
  };
};
