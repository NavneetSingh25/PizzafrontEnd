import Layout from "../../Layouts/Layout";
import Food from "../../assets/Images/Food.svg";

function AddProductPresentation({ handleProductInput, handleProductFormSubmit }) {
  return (
    <Layout>
      <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5">
          
          {/* Left Illustration */}
          <div className="md:w-2/6">
            <img src={Food} alt="Food Illustration" />
          </div>

          {/* Right Form Section */}
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Product</h2>

            <form onSubmit={handleProductFormSubmit} encType="multipart/form-data" className="space-y-5">

              {/* Product Name */}
              <div>
                <label htmlFor="productName" className="text-sm font-medium text-gray-700">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder="e.g. Margherita Pizza"
                  minLength={5}
                  maxLength={20}
                  required
                  onChange={handleProductInput}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Brief product description"
                  maxLength={60}
                  onChange={handleProductInput}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* Price */}
              <div>
                <label htmlFor="productPrice" className="text-sm font-medium text-gray-700">
                  Product Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  required
                  onChange={handleProductInput}
                  placeholder="e.g. 299"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="productQuantity" className="text-sm font-medium text-gray-700">
                  Product Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="productQuantity"
                  name="productQuantity"
                  required
                  onChange={handleProductInput}
                  min={1}
                  placeholder="e.g. 10"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="text-sm font-medium text-gray-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  onChange={handleProductInput}
                  className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="drinks">Soft Drinks</option>
                  <option value="sides">Sides</option>
                </select>
              </div>

              {/* Image */}
              <div>
                <label htmlFor="productImage" className="text-sm font-medium text-gray-700">
                  Product Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  accept=".jpg,.jpeg,.png"
                  required
                  onChange={handleProductInput}
                  className="mt-1 w-full p-2 file:bg-orange-400 file:text-white file:rounded-md border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 rounded-md transition duration-200"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AddProductPresentation;