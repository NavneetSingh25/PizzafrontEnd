import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../Redux/Slices/ProductSlice";
import AddProductPresentation from "./AddProductPresentation";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productState, setProductState] = useState({
    productName: "",
    productPrice: "",
    description: "",
    productQuantity: "",
    category: "",
    productImage: ""
  });

  function handleProductInput(e) {
    const { name, value, files } = e.target;
    setProductState((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  }

  async function handleProductFormSubmit(e) {
    e.preventDefault();

    const { productName, productPrice, productQuantity, productImage, category } = productState;

    if (!productName || !productPrice || !productQuantity || !productImage || !category) {
      toast.error("All required fields must be filled.");
      return;
    }

    if (productName.length < 5 || productName.length > 20) {
      toast.error("Product Name must be between 5 and 20 characters.");
      return;
    }

    if (productQuantity <= 0) {
      toast.error("Quantity must be at least 1.");
      return;
    }

    const formData = new FormData();
    for (let key in productState) {
      const formKey = key === "productPrice" ? "price" : key;
      formData.append(formKey, productState[key]);
    }

    try {
      const apiResponse = await dispatch(createProduct(formData));
      if (apiResponse?.payload?.success) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong during submission.");
    }
  }

  return (
    <AddProductPresentation
      handleProductInput={handleProductInput}
      handleProductFormSubmit={handleProductFormSubmit}
    />
  );
}

export default AddProduct;