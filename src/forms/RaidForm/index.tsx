import AnchorButtons from "@/components/AnchorButtons";

import { RaidCreateRequest, RaidDto } from "@/Generated/Raidv2";
import { Close as CloseIcon, Save as SaveIcon } from "@mui/icons-material";
import { Box, Fab, Stack, Tooltip } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import FormDatesComponent from "./components/FormDatesComponent";

import FormSpatialCoveragesComponent from "./components/FormSpatialCoveragesComponent";

import { ValidationFormSchema } from "@/entities/validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import FormAccessComponent from "./components/FormAccessComponent";
import FormAlternateIdentifiersComponent from "./components/FormAlternateIdentifiersComponent";
import FormAlternateUrlsComponent from "./components/FormAlternateUrlsComponent";
import FormContributorsComponent from "./components/FormContributorsComponent";
import FormDescriptionsComponent from "./components/FormDescriptionsComponent";
import FormOrganisationsComponent from "./components/FormOrganisationsComponent";
import FormRelatedObjectsComponent from "./components/FormRelatedObjectsComponent";
import FormRelatedRaidsComponent from "./components/FormRelatedRaidsComponent";
import FormSubjectsComponent from "./components/FormSubjectsComponent";
import FormTitlesComponent from "./components/FormTitlesComponent";

const formFields = [
  {
    id: "dates",
    component: FormDatesComponent,
  },
  {
    id: "titles",
    component: FormTitlesComponent,
  },
  {
    id: "descriptions",
    component: FormDescriptionsComponent,
  },
  {
    id: "contributors",
    component: FormContributorsComponent,
  },
  {
    id: "organisations",
    component: FormOrganisationsComponent,
  },
  {
    id: "related-objects",
    component: FormRelatedObjectsComponent,
  },
  {
    id: "alternate-identifiers",
    component: FormAlternateIdentifiersComponent,
  },
  {
    id: "alternate-urls",
    component: FormAlternateUrlsComponent,
  },
  {
    id: "related-raids",
    component: FormRelatedRaidsComponent,
  },
  {
    id: "access",
    component: FormAccessComponent,
  },
  {
    id: "subjects",
    component: FormSubjectsComponent,
  },
  {
    id: "spatial-coverage",
    component: FormSpatialCoveragesComponent,
  },
];

type FormProps = {
  raidData: RaidCreateRequest;
  onSubmit(data: RaidDto): void;
  isSubmitting: boolean;
  onDirty?: (isDirty: boolean) => void;
  prefix?: string;
  suffix?: string;
};

export default function RaidForm({
  raidData,
  onSubmit,
  isSubmitting,
  prefix,
  suffix,
}: FormProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const formMethods = useForm<RaidDto>({
    defaultValues: raidData,
    resolver: zodResolver(ValidationFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    // Skip the first render (initial load)
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }
  }, [isInitialLoad]);

  const { control, trigger } = formMethods;
  const { errors } = formMethods.formState;

  return (
    <>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
        >
          <Tooltip title="Cancel" placement="left">
            <Fab
              color="primary"
              size="small"
              sx={{ position: "fixed", bottom: "72px", right: "16px" }}
              component="button"
              href={
                raidData?.identifier?.id
                  ? `/show-raid/${prefix}/${suffix}`
                  : "/"
              }
            >
              <CloseIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Save changes" placement="left">
            <Fab
              variant="extended"
              color="primary"
              sx={{ position: "fixed", bottom: "16px", right: "16px" }}
              component="button"
              type="submit"
              disabled={
                isSubmitting ||
                Object.keys(formMethods.formState.errors).length > 0
              }
              data-testid="save-raid-button"
            >
              <SaveIcon sx={{ mr: 1 }} />
              {isSubmitting ? "Saving..." : "Save"}
            </Fab>
          </Tooltip>

          <Stack spacing={2} data-testid="raid-form">
            <AnchorButtons errors={formMethods.formState.errors} />
            <Stack spacing={2}>
              {formFields.map((field) => {
                const Component = field.component;
                return (
                  <Box id={field.id} key={field.id} className="scroll">
                    <Component
                      control={control}
                      errors={errors}
                      trigger={trigger}
                    />
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </form>
      </FormProvider>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </>
  );
}
