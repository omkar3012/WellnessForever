import InventoryCard from "../InventoryCard/InventoryCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import image from "../../assets/images/recofast.png";
import { useEffect, useState } from "react";

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

const InventorySection = (props) => {

  const [inventory, setInventory] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/inventoryItems")
    .then(res => res.json())
    .then(data => setInventory(data))
  }, [])

  const handleDelete = async(id) => {
    await fetch('http://localhost:8000/inventoryItems/' + id, {
      method: 'DELETE'
    })

    const newInventory = inventory.filter(inventoryItem => inventoryItem.id != id);
    setInventory(newInventory);
  }

  return (
    <Grid paddingTop={2} container direction="row" flexGrow={1} spacing={3}>
      {inventory.map(
        (item, index) =>
          item.inventoryStatus == "active" && (
            <Grid item id={index * 200} md={2.5}>
              <Paper id={index * 200 + 1} >
                <InventoryCard
                  id={item.id}
                  inventoryName={item.inventoryName}
                  inventoryQuantity={item.inventoryQuantity}
                  inventoryExpiryDate={item.inventoryExpiryDate}
                  inventoryDescription = {item.inventoryDescription}
                  deleteHandler = {handleDelete}
                />
              </Paper>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default InventorySection;
