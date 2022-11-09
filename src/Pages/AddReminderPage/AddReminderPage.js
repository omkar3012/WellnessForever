import "./AddReminderPage.css";
import MiniDrawer from "../../Components/MiniDrawer/MiniDrawer";
import { Typography, TextField, Stack } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { addDays, addHours, differenceInDays } from "date-fns";
import { faArrowUpFromGroundWater } from "@fortawesome/free-solid-svg-icons";

const AddReminderPage = (props) => {
  const [reminderType, setReminderType] = React.useState("");
  const [reminderName, setReminderName] = React.useState("");
  const [reminderDose, setReminderDose] = React.useState("");
  const [currReminderDateTime, setCurrReminderDateTime] = React.useState("");
  // const [reminderDateTime, setReminderDateTime] = React.useState("");
  const [reminderFrequency, setReminderFrequency] = React.useState("");
  const [reminderDuration, setReminderDuration] = React.useState("");
  const [reminderDescription, setReminderDescription] = React.useState("");
  const [reminderStatus, setReminderStatus] = React.useState("active");
  var reminderDateTime = "";

  const handleTypeChange = (event) => {
    setReminderType(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setReminderFrequency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    reminderDateTime = currReminderDateTime;
    //TODO: Validate
    fetch("http://localhost:8000/reminderItems", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        reminderType,
        reminderName,
        reminderDose,
        reminderDateTime,
        reminderFrequency,
        reminderDuration,
        reminderDescription,
        reminderStatus,
      }),
    });
    updater();
  };

  const updater = () => {
    var dayCounter = 0;
    var startDate = currReminderDateTime;
    var currentTime = currReminderDateTime;
    // currentDate = addDays(currentDate, 1);
    if (reminderType === "Medicine") {
      while (dayCounter <= reminderDuration) {
        if (reminderFrequency === "5") {
          currentTime = addHours(new Date(currentTime), 4);
          console.log(currentTime);
        }
        if (reminderFrequency === "3") {
          currentTime = addHours(new Date(currentTime), 8);
          console.log(currentTime);
        }
        if (reminderFrequency === "2") {
          currentTime = addHours(new Date(currentTime), 12);
          console.log(currentTime);
        }
        if (reminderFrequency === "1") {
          currentTime = addHours(new Date(currentTime), 24);
          console.log(currentTime);
        }
        reminderDateTime = currentTime;
        fetch("http://localhost:8000/reminderItems", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            reminderType,
            reminderName,
            reminderDose,
            reminderDateTime,
            reminderFrequency,
            reminderDuration,
            reminderDescription,
            reminderStatus,
          }),
        });
        dayCounter = differenceInDays(
          new Date(currentTime),
          new Date(startDate)
        )
        console.log(dayCounter);
      }
    }
  };

  const handleReset = (event) => {
    setReminderType("");
    setReminderName("");
    setReminderDose("");
    setCurrReminderDateTime("");
    setReminderFrequency("");
    setReminderDuration("");
    setReminderDescription("");
  };

  return (
    <MiniDrawer>
      <Typography variant="h5" color="primary" padding={1.5}>
        Enter details of reminder
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box minWidth={2}>
          <FormControl required fullWidth margin="dense">
            <InputLabel id="reminderTypeLabel">Type</InputLabel>
            <Select
              labelId="reminderTypeLabel"
              id="reminderType"
              value={reminderType}
              label="Type"
              onChange={handleTypeChange}
              required
            >
              <MenuItem value="Medicine">Medicine</MenuItem>
              <MenuItem value="Appointment">Appointment</MenuItem>
              <MenuItem value="Inventory">Inventory</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Name of Reminder"
            color="secondary"
            margin="dense"
            fullWidth
            required
            onChange={(e) => setReminderName(e.target.value)}
          />
          <TextField
            label="Dose Amount"
            color="secondary"
            margin="dense"
            fullWidth
            required
            onChange={(e) => setReminderDose(e.target.value)}
          />
          <Box required paddingTop={1} paddingBottom={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Start Date"
                value={currReminderDateTime}
                onChange={(e) => {
                  setCurrReminderDateTime(e);
                }}
              />
            </LocalizationProvider>
          </Box>

          <FormControl required fullWidth margin="dense">
            <InputLabel id="reminderFrequencyLabel">Frequency</InputLabel>
            <Select
              labelId="reminderFrequencyLabel"
              id="reminderFrequency"
              value={reminderFrequency}
              label="Frequency"
              onChange={handleFrequencyChange}
              required
            >
              <MenuItem value="1">1x a day</MenuItem>
              <MenuItem value="2">2x a day</MenuItem>
              <MenuItem value="3">3x a day</MenuItem>
              <MenuItem value="5">5x a day</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Duration (days)"
            color="secondary"
            margin="dense"
            fullWidth
            required
            onChange={(e) => setReminderDuration(e.target.value)}
          />
          <TextField
            label="Description"
            color="secondary"
            margin="dense"
            fullWidth
            multiline
            minRows="3"
            onChange={(e) => setReminderDescription(e.target.value)}
          />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label" disabled>
              Description Upload
              <input hidden accept="image/*" multiple type="file" disabled />
            </Button>
            {/* <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton> */}
          </Stack>
        </Box>
        <Stack direction="row" wialignItems="center" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            margin="dense"
            onClick={handleSubmit}
            endIcon={<AddAlertIcon />}
          >
            Add
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="primary"
            margin="dense"
            onClick={handleReset}
            endIcon={<BackspaceIcon />}
          >
            Reset
          </Button>
        </Stack>
      </form>
    </MiniDrawer>
  );
};

export default AddReminderPage;
