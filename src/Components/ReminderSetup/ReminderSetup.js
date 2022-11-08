import "./HomePage.css";
import ReminderSection from "../../Components/ReminderSection/ReminderSection";
import Typography from "@mui/material/Typography";
import MyAppBar from "../../Components/MyAppBar/MyAppBar";

import ResponsiveAppBar from "../../Components/ResponsiveAppBar/ResponsiveAppBar";

const ReminderSetup = () => {
  return (
    <>
    {/* <MyAppBar></MyAppBar> */}
    {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      
      
      <Typography 
        variant="h4"
        color="primary">
            Upcoming reminders
      </Typography>
      <ReminderSection />
    </>
  );
};

export default ReminderSetup;