import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Box } from "@mui/material";

const ItemListContainer = () => {
  return (
    <>
      <Box padding="200px 200px">
        <ItemList />
      </Box>
    </>
  );
};

export default ItemListContainer;
