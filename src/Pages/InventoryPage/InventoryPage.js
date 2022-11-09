import "./InventoryPage.css";
import ReminderSection from "../../Components/ReminderSection/ReminderSection";
import Typography from "@mui/material/Typography";
import MiniDrawer from "../../Components/MiniDrawer/MiniDrawer";
import InventorySection from "../../Components/InventorySection/InventorySection";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const InventoryPage = (props) => {
  return (
    <>
      <MiniDrawer>
        <Stack direction="row" justifyContent="center" >
          <Typography variant="h4" color="primary">
            Current Inventory
          </Typography>
        </Stack>

        <InventorySection />
      </MiniDrawer>
    </>
  );
};

export default InventoryPage;
