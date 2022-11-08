import "./ReminderCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../assets/images/recofast.png"
import { format } from "date-fns";

const ReminderCard = (props) => {
  const date = format(new Date(props.reminderDateTime), 'PPPPp')
  // console.log(date)
  return (
    <Card color="text.secondary">
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="h3">
          {props.reminderType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Which: <strong>{props.reminderName}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          When: <strong>{date}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          How Much: <strong>{props.reminderDosage} </strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Extra comments: <strong>{props.reminderDescription} </strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => props.deleteHandler(props.id)}>Accept</Button>
        <Button variant="contained" color="warning">Snooze</Button>
      </CardActions>
    </Card>
  );
};

export default ReminderCard;
