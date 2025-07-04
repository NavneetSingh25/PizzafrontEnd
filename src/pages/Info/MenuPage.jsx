import Layout from "../../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slices/ProductSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

        function MenuPage() {
        const dispatch = useDispatch();
        const { productData } = useSelector((state) => state.product);
        const [visibleCount, setVisibleCount] = useState(3);

        useEffect(() => {
            dispatch(getAllProducts());
        }, [dispatch]);

        const handleLoadMore = () => {
        const total = productData.filter(item => item.inStock).length;
        setVisibleCount(prev => Math.min(prev + 3, total));
        };

        const visibleProducts = productData
            .filter(item => item.inStock)
            .slice(0, visibleCount);

        return (
            <Layout>
            <section className="py-10 px-6 bg-gradient-to-r from-cyan-50 to-cyan-100">
                <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
                    Explore Our Flavors
                </h1>
                <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
                    Discover handcrafted pizzas, refreshing drinks, and tasty sides — all curated by our expert chefs, freshly made and ready to order.
                </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                {visibleProducts.map((item) => (
                    <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <Link to={`/product/${item._id}`}>
                        <div className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition">
                        <img
                            src={item.productImage}
                            alt={item.productName}
                            className="object-cover w-full h-48 rounded-t-lg"
                        />
                        <div className="p-4 bg-white">
                            <p className="text-sm text-orange-500 font-medium uppercase tracking-wide">
                            {item.category}
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 truncate">
                            {item.productName}
                            </h3>
                            <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                            {item.description}
                            </p>
                            <p className="text-lg font-bold text-orange-600">${item.price}</p>
                        </div>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>

            {visibleCount < productData.filter(item => item.inStock).length && (
            <div className="text-center mt-8">
                <button
                onClick={handleLoadMore} // load one more at a time
                className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                Load More
                </button>
            </div>
            )}
            </section>
            </Layout>
        );
}

export default MenuPage;