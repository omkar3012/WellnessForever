import './InventoryPage.css'
import ReminderSection from "../../Components/ReminderSection/ReminderSection";
import Typography from "@mui/material/Typography";
import MiniDrawer from "../../Components/MiniDrawer/MiniDrawer";
import InventorySection from '../../Components/InventorySection/InventorySection';


const InventoryPage = props => {
    return <><MiniDrawer>
    <Typography variant="h4" color="primary">
      Current Inventory
    </Typography>
    <InventorySection />
  </MiniDrawer></>
}

export default InventoryPage;