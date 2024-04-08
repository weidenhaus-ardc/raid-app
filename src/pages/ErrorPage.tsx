import ErrorAlertComponent from "@/components/ErrorAlertComponent";
import AppNavBarUnauthenticated from "@/design/AppNavBarUnauthenticated";
import { Box, Container } from "@mui/material";

export default function ErrorPage({ error }: { error?: Error | string }) {
  return (
    <>
      <AppNavBarUnauthenticated />
      <Container sx={{ mt: 6 }}>
        <Box sx={{ height: "2em" }} />
        <ErrorAlertComponent error={error} />
      </Container>
    </>
  );
}
