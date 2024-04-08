import {
  Edit as EditIcon,
  History as HistoryIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { useNavigate } from "react-router";

export default function ShowRaidPageSpeedDialMenu({
  handle,
}: {
  handle: string;
}) {
  const navigate = useNavigate();

  return (
    <>
      <SpeedDial
        ariaLabel="raid speeddial"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<MenuIcon />}
        data-testid="raid-speeddial"
      >
        <SpeedDialAction
          icon={<EditIcon />}
          tooltipTitle="Edit RAiD"
          onClick={() => navigate(`/raids/${handle}/edit`)}
          data-testid="edit-raid-button"
        />
        <SpeedDialAction
          icon={<HistoryIcon />}
          tooltipTitle="Show RAiD History"
          onClick={() => navigate(`/show-raid-history/${handle}`)}
        />
        <SpeedDialAction
          icon={<KeyboardArrowUpIcon />}
          tooltipTitle="Scroll to top"
          onClick={() => {
            document.getElementById("start")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }}
        />
      </SpeedDial>
    </>
  );
}
