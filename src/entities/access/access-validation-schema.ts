import accessType from "@/references/access_type.json";
import { z } from "zod";

const accessTypeValidationSchema = z.object({
  id: z.enum(accessType.map((type) => type.uri) as [string, ...string[]]),
  schemaUri: z.literal("https://github.com/au-research/raid-metadata/tree/main/scheme/access/type/v1"),
});

const accessStatementLanguageValidationSchema = z.object({
  id: z.string().min(1),
  schemaUri: z.literal("https://www.iso.org/standard/39534.html"),
});

const accessStatementValidationSchema = z.object({
  text: z.string().min(1),
  language: accessStatementLanguageValidationSchema,
});

export const accessValidationSchema = z.object({
  type: accessTypeValidationSchema,
  statement: accessStatementValidationSchema,
  embargoExpiry: z.date().optional(),
});
