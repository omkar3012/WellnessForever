import ReminderCard from "../../Components/ReminderCard/ReminderCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import image from "../../assets/images/recofast.png";
import { useEffect, useState } from "react";
import { compareAsc } from "date-fns";

// const items = [
//   {
//     reminderType: "Medicine",
//     reminderName: "Recofast",
//     reminderDosage: "1 tab",
//     reminderStatus: "active",
//   },
//   {
//     reminderType: "Medicine",
//     reminderName: "Recofast",
//     reminderDosage: "1 tab",
//     reminderStatus: "active",
//   },
//   {
//     reminderType: "Medicine",
//     reminderName: "Recofast",
//     reminderDosage: "1 tab",
//     reminderStatus: "",
//   },
// ];

const ReminderSection = (props) => {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/reminderItems")
    .then(res => res.json())
    .then(data => setReminders(data.sort(function(a,b){return compareAsc(new Date(a.nextReminderDateTime), new Date(b.nextReminderDateTime))})))
  }, [])

  // .then(updateReminders)
  // const updateReminders = () => {
  //   setReminders(reminders.sort(function(a,b){return compareAsc(new Date(a.nextReminderDateTime), new Date(b.nextReminderDateTime))}));
  //   console.log(reminders)
  // }

  const handleDelete = async(id) => {
    await fetch('http://localhost:8000/reminderItems/' + id, {
      method: 'DELETE'
    })

    const newReminders = reminders.filter(reminder => reminder.id != id);
    setReminders(newReminders);
  }

  return (
    <Grid paddingTop={2} container direction="row" flexGrow={1} spacing={3}>
      {reminders.map(
        (item) =>
          item.reminderStatus == "active" && (
            <Grid item md={2.5}>
              <Paper>
                <ReminderCard
                  id={item.id}
                  reminderName={item.reminderName}
                  reminderType={item.reminderType}
                  reminderDosage={item.reminderDose}
                  reminderDescription = {item.reminderDescription}
                  reminderDateTime = {item.nextReminderDateTime}
                  deleteHandler = {handleDelete}
                />
              </Paper>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default ReminderSection;
