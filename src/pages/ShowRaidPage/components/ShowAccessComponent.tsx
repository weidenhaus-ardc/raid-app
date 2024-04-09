import { Access } from "@/Generated/Raidv2";
import language from "@/references/language.json";
import { dateDisplayFormatter } from "@/Util/DateUtil";
import { extractKeyFromIdUri } from "@/utils";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

export default function ShowAccessComponent({ access }: { access: Access }) {
  const lang = language.find(
    (language) =>
      language.id.toString() === access?.statement?.language?.id?.toString()
  );

  return (
    <Card sx={{ borderLeft: "solid", borderLeftColor: "primary.main" }}>
      <CardHeader title="Access" />
      <CardContent>
        <Stack gap={3}>
          <Box className="raid-card-well">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <Box>
                  <Typography variant="body2">
                    Access Statement ({extractKeyFromIdUri(access?.type?.id)})
                  </Typography>
                  <Typography color="text.secondary" variant="body1">
                    {access?.statement?.text}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Box>
                  <Typography variant="body2">Language</Typography>
                  <Typography color="text.secondary" variant="body1">
                    {lang?.name}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Box>
                  <Typography variant="body2">Access Type</Typography>
                  <Typography color="text.secondary" variant="body1">
                    {extractKeyFromIdUri(access?.type?.id)}
                  </Typography>
                </Box>
              </Grid>
              {access?.type?.id.includes("embargo") && (
                <Grid item xs={12} sm={12} md={2}>
                  <Box>
                    <Typography variant="body2">Embargo Expiry</Typography>
                    <Typography color="text.secondary" variant="body1">
                      {dateDisplayFormatter(
                        dayjs(access?.embargoExpiry).format("YYYY-MM-DD")
                      )}
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
