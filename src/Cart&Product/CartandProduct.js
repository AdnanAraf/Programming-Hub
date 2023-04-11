import { getStoredCart } from "../Components/Utilities/fakedb";

export const productsAndCartData = async () => {
  const productsData = await fetch("Showfeature.json");
  const products = await productsData.json();
  // console.log(products);
  const savedCart = getStoredCart();

  const initialCart = [];
  for (const id in savedCart) {
    // console.log(savedCart);
    const foundProduct = products.find((product) => product.id == id);
    // console.log(foundProduct);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { initialCart, products };
};
