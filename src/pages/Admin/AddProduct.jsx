import Layout from "../../Layouts/Layout";
import Food from '../../assets/Images/Food.svg'
function AddProduct(){
    return(
        <Layout>
            <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
                <div className="flex items-center justify-center px-5">
                    <div className="md:w-2/6">
                        <img src={Food} alt="FoodImage"/>
                    </div>
                    <div className="max-w-md md:w-4/6 mx-auto p-4 px-6 py-8 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 font-semibold text-2xl">
                        Add Product
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="productName" className="text-sm font-medium block text-gray-700 ">
                                    Product Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    required
                                    name="productName"
                                    minLength={5}
                                    maxLength={20}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                                    />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="text-sm font-medium block text-gray-700 ">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    minLength={5}
                                    maxLength={60}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                                    />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="productPrice" className="text-sm font-medium block text-gray-700 ">
                                    Product Price <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="productPrice"
                                    required
                                    name="productPrice"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                                    />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="productQuantity" className="text-sm font-medium block text-gray-700 ">
                                    Product Quantity <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="productQuantity"
                                    required
                                    name="productQuantity"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                                    />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="category" className="text-sm font-medium block text-gray-700 ">
                                    Select Category <span className="text-red-500">*</span>
                                </label>
                                <select name="category" id="category" className="mt-1 p-2 w-full border border-gray-300 bg-gray-200 focus:bg-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400">
                                    <option value="veg">Vegetarian</option>
                                    <option value="non-veg">Non-Vegetarian</option>
                                    <option value="drinks">Soft Drinks</option>
                                    <option value="sides">Sides</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="productImage" className="text-sm font-medium block text-gray-700 ">
                                    Product Image <span className="text-red-500">(.jpg, .png, .jpeg)</span>
                                </label>
                                <input
                                    type="file"
                                    id="productImage"
                                    required
                                    name="productImage"
                                    accept=".jpg,.jpeg,.png"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                                    />
                            </div>

                            <button type="submit" className="w-full p-2 mt-1 border-none rounded-md bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:opacity-50 transition duration-300 ease-in-out">
                                Add Product
                            </button>

                        </form>
                </div>
                </div>
            </section>
        </Layout>
    );
}

export default AddProduct;