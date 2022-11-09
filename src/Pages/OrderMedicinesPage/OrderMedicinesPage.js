import { useEffect } from "react";
import initMap, { getPlacesData } from "../../api";
import MiniDrawer from "../../Components/MiniDrawer/MiniDrawer";

const OrderMedicinesPage = () => {
  useEffect(() => {
    // getPlacesData();
    // initMap();
    console.log("Done")
  }, [])

  return (
    <MiniDrawer>
      
    </MiniDrawer>
  );
};

export default OrderMedicinesPage;
