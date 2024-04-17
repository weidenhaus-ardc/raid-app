import { ServicePoint } from "@/generated/raid";
import SingletonServicePointApi from "@/SingletonServicePointApi";
import ErrorAlertComponent from "@/components/ErrorAlertComponent";
import { useCustomKeycloak } from "@/hooks/useCustomKeycloak";
import { CurrentUserInterface } from "@/types";
import { Add as AddIcon } from "@mui/icons-material";
import { Container, Fab, Stack, Tooltip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import CurrentUser from "./components/CurrentUser";
import RaidTable from "./components/RaidTable";

export default function HomePage() {
  const { initialized, keycloak } = useCustomKeycloak();
  const servicePointApi = SingletonServicePointApi.getInstance();
  const { tokenParsed } = keycloak;

  const listServicePoints = async () => {
    return servicePointApi.findAllServicePoints({
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
  };

  const servicePointQuery = useQuery<ServicePoint[]>({
    queryKey: ["servicePoints"],
    queryFn: listServicePoints,
    enabled: initialized && keycloak.authenticated,
  });

  if (!initialized || servicePointQuery.isPending) {
    return <LoadingPage cardTitle="Homepage" />;
  }

  if (servicePointQuery.isError) {
    return <ErrorAlertComponent error={servicePointQuery.error} />;
  }

  const currentUser: CurrentUserInterface = {
    userName: tokenParsed?.preferred_username ?? tokenParsed?.email,
    clientId: keycloak.clientId || "",
    servicePointName:
      servicePointQuery.data.find((el) => el.id === tokenParsed?.service_point)
        ?.name || "",
    role: tokenParsed?.realm_access?.roles.includes("service-point-user")
      ? "service-point-user"
      : "",
  };

  return (
    <Container>
      <Stack gap={2}>
        <Tooltip title="Mint new RAiD" placement="left">
          <Fab
            component={Link}
            color="primary"
            sx={{ position: "fixed", bottom: "16px", right: "16px" }}
            type="button"
            to="/raids/new"
            data-testid="mint-raid-button"
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <CurrentUser currentUser={currentUser} />
        <RaidTable title="Recently minted RAiDs" />
      </Stack>
    </Container>
  );
}
