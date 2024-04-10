import titleType from "@/references/title_type.json";
import { combinedPattern } from "@/Util/DateUtil";
import { z } from "zod";

const titleTypeValidationSchema = z.object({
  id: z.enum(titleType.map((type) => type.uri) as [string, ...string[]]),
  schemaUri: z.literal("https://vocabulary.raid.org/title.type.schema/376"),
});

const titleLanguageValidationSchema = z.object({
  id: z.string().min(1),
  schemaUri: z.literal("https://www.iso.org/standard/74575.html"),
});

export const titleValidationSchema = z
  .array(
    z.object({
      text: z.string().min(1),
      type: titleTypeValidationSchema,
      language: titleLanguageValidationSchema,
      startDate: z.string().regex(combinedPattern).min(1),
      endDate: z.string().regex(combinedPattern).min(1).optional(),
    })
  )
  .min(1);
