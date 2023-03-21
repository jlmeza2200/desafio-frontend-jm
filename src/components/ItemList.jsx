import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const PHOTOS_ENDPOINT = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    fetch(PHOTOS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        // Del array de 100 objetos, filtramos los primeros 6
        const sixObjectsProductDetail = data.slice(0, 6);
        setProducts(sixObjectsProductDetail);
      });
  }, []);

  return (
    <>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {products.map((prod) => (
          <Box key={prod.id}>
            <img
              src={prod.thumbnailUrl}
              alt="Product Image"
              width="300px"
              height="400px"
              style={{ cursor: "pointer" }}
            />
            <Typography>{prod.title}</Typography>
            <Link to={`/itemDetail/${prod.id}`}>Ver detalle </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ItemList;
