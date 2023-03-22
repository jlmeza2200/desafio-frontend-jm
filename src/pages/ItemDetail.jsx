import { shades } from "../../theme";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useGetProducts from "../hooks/getProducts";

const ItemDetail = () => {

  // CODIGO MEJORADO CON CUSTOM HOOKS: getProducts

  // const [products, setProducts] = useState([]);
  // const PHOTOS_ENDPOINT = "https://jsonplaceholder.typicode.com/photos";
  // useEffect(() => {
  //   fetch(PHOTOS_ENDPOINT)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Del array de 5000 objetos, filtramos los primeros 6
  //       const sixObjectsProductDetail = data.slice(0, 6);
  //       setProducts(sixObjectsProductDetail);
  //     });
  // }, []);

  const products = useGetProducts() 

  const { productId } = useParams();
  const productSelected = products.find((prod) => prod.id == productId);

  return (
     <Box width="80%" m="80px auto" >
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={productSelected?.thumbnailUrl}
              width="100%"
              height="100%"
              src={productSelected?.thumbnailUrl}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* ACTIONS */}
          <Box flex="1 1 50%" mb="40px">
            <Box m="65px 0 25px 0">
              <Typography variant="h3">{productSelected?.title}</Typography>

              <Typography sx={{ mt: "20px" }}>
                {/* No encontre en la API un texto más largo para descripción */}
                {productSelected?.title}
                {productSelected?.title}
                {productSelected?.title}
                {productSelected?.title}
                {productSelected?.title}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              <Box
                display="flex"
                alignItems="center"
                border={`1.5px solid ${shades.neutral[300]}`}
                mr="20px"
                p="2px 5px"
              >
                <IconButton onClick={() => {}}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>1</Typography>
                <IconButton onClick={() => {}}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                sx={{
                  backgroundColor: "#222222",
                  color: "white",
                  borderRadius: 0,
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={() => {}}
              >
                ADD TO CART
              </Button>
            </Box>
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
              </Box>
              <Typography>CATEGORIES: NA </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
  )
};

export default ItemDetail;
