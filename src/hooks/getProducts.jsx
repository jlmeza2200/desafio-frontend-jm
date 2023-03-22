import {useState, useEffect} from 'react';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const PHOTOS_ENDPOINT = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    fetch(PHOTOS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        // Del array de 5000 objetos, filtramos sólo 6 para muestra de ejemplo
        const sixObjectsProductDetail = data.slice(0, 6);
        setProducts(sixObjectsProductDetail);
      });
  }, []);

  return products
}
export default useGetProducts