import ReminderCard from "../../Components/ReminderCard/ReminderCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import image from "../../assets/images/recofast.png";
import { useEffect, useState } from "react";
import { compareAsc, format, isThisMinute } from "date-fns";
import { unstable_composeClasses } from "@mui/material";
import roundToNearestMinutes from "date-fns/roundToNearestMinutes";


const ReminderSection = (props) => {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/reminderItems")
    .then(res => res.json())
    .then(data => setReminders(data.sort(function(a,b){return compareAsc(new Date(a.reminderDateTime), new Date(b.reminderDateTime))})))
    .then(alert);
  }, [])

  const alert = () => {
    console.log("Alerting")
    // const currentDate =  format(new Date(), 'PPPPp');
    const currentDate = "Wednesday, November 9th, 2022 at 12:55 AM"
    const newAlerts = reminders.filter((reminder) => {
      console.log(new Date(reminder.reminderDateTime));
      // return roundToNearestMinutes(new Date(currentDate)) === roundToNearestMinutes(new Date(format(new Date(reminder.reminderDateTime), 'PPPPp')));
      return isThisMinute(new Date(reminder.reminderDateTime));
    } )

  console.log("Mapped")
  console.log(newAlerts)

    newAlerts.map((alert) => {
      if (!window.Notification) {
        console.log('Browser does not support notifications.')
      } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
          console.log("Alert sent")
          // show notification here
          new Notification('Reminder!!', {
            body: `Time for ${alert.reminderType}!! ${alert.reminderDose} of ${alert.reminderName}`,
            icon: 'https://bit.ly/2DYqRrh'
          })
        } else {
          // request permission from the user
          Notification.requestPermission()
            .then(function (p) {
              if (p === 'granted') {
                console.log("Alert sent")
                // show notification here
                new Notification('Reminder!!', {
                  body: `Time for ${alert.reminderType}\n!! Please take ${alert.reminderDose} of ${alert.reminderName}`,
                  icon: 'https://bit.ly/2DYqRrh'
                })
              } else {
                console.log('User has blocked notifications.')
              }
            })
            .catch(function (err) {
              console.error(err)
            })
        }
      }
    }) 
  }


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
                  reminderDateTime = {item.reminderDateTime}
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
