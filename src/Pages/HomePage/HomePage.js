import "./HomePage.css";
import ReminderSection from "../../Components/ReminderSection/ReminderSection";
import Typography from "@mui/material/Typography";
import MyAppBar from "../../Components/MyAppBar/MyAppBar";
import MiniDrawer from "../../Components/MiniDrawer/MiniDrawer";
import ResponsiveAppBar from "../../Components/ResponsiveAppBar/ResponsiveAppBar";
import { Container, Drawer } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "cyan",
    height: 100,
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <MiniDrawer>
        <Typography variant="h4" color="primary">
          Upcoming reminders
        </Typography>
        <ReminderSection />
      </MiniDrawer>
      {/* <Container>
        <Typography variant="h4" color="primary">
          Upcoming reminders
        </Typography>
        <ReminderSection />
      </Container> */}
    </>
  );
};

export default HomePage;
