import { useParams } from "react-router-dom";
const ProductsD = () => {
  let { id } = useParams();
  console.log(id, "id from URL");
  const products = [
    { id: 1, name: "iPhone 16", price: 80000 },
    { id: 2, name: "Samsung S26", price: 70000 },
    { id: 3, name: "OnePlus 14", price: 50000 },
  ];
  // find the product whose id matches the URL id
  let data = products.find((a) => {
    return a.id == id; // == used on purpose (number == string)
  });
  return <div>{data.name}</div>;
};
export default ProductsD;
