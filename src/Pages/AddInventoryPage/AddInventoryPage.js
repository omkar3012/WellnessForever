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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {format} from 'date-fns'
import { Link } from "react-router-dom";


const AddInventoryPage = (props) => {
  const [inventoryExpiryDate, setInventoryExpiryDate] = React.useState("");
  const [inventoryName, setInventoryName] = React.useState("");
  const [inventoryQuantity, setInventoryQuantity] = React.useState("");
  const [inventoryDescription, setInventoryDescription] = React.useState("");
  const [inventoryStatus, setInventoryStatus] = React.useState("active");

  const handleSubmit = (event) => {
    event.preventDefault();

    //TODO: Validate
    fetch("http://localhost:8000/inventoryItems", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ inventoryName, inventoryQuantity, inventoryExpiryDate, inventoryDescription, inventoryStatus }),
    });
  };

  const handleReset = (event) => {
    setInventoryName("");
    setInventoryQuantity("");
    setInventoryExpiryDate("");
    setInventoryDescription("");
  };

  return (
    <>
      <MiniDrawer>
      <Stack direction="row" justifyContent="space-between" >
          <Typography variant="h5" color="primary">
            New Inventory
          </Typography>
          <Link to="/home/orderMedicines"><Button variant="contained"  color="secondary">Order Online</Button></Link>
          </Stack>
        <form onSubmit={handleSubmit}>
          <Box minWidth={2}>
            <TextField
              label="Name of Inventory"
              color="secondary"
              margin="dense"
              fullWidth
              required
              onChange={(e) => setInventoryName(e.target.value)}
            />
            <TextField
              label="Quantity"
              color="secondary"
              margin="dense"
              fullWidth
              required
              onChange={(e) => setInventoryQuantity(e.target.value)}
            />
            <Box required paddingTop={1} paddingBottom={1}>
              <LocalizationProvider required dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Expiry Date"
                  value={inventoryExpiryDate}
                  onChange={(e) => {
                    setInventoryExpiryDate(format( new Date(e), 'P'));
                    console.log(inventoryExpiryDate)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
            <TextField
              label="Description"
              color="secondary"
              margin="dense"
              fullWidth
              multiline
              minRows="3"
              onChange={(e) => setInventoryDescription(e.target.value)}
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
          <Stack direction="row" wialignitems="center" spacing={2}>
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
    </>
  );
};

export default AddInventoryPage;
