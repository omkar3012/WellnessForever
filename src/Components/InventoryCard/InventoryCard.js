import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../assets/images/recofast.png"
import { format } from "date-fns";

const InventoryCard = (props) => {
  const expiryDate = format(new Date(props.inventoryExpiryDate), 'PPPP')
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
          {props.inventoryName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          How Many: <strong>{props.inventoryQuantity} </strong>
        </Typography>
        <Typography variant="body2" color="error">
          Expires: <strong>{expiryDate} </strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Extra Information: <strong>{props.inventoryDescription} </strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" >Edit</Button>
        <Button variant="contained" color="warning" onClick={() => props.deleteHandler(props.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default InventoryCard;
