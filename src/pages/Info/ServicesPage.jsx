import Layout from "../../Layouts/Layout";

function ServicesPage() {
    return (
        <Layout>
        <section className="py-16 px-6 bg-gradient-to-r from-yellow-100 to-orange-200">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text mb-6">
            What We Offer
            </h1>

            <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h2 className="text-xl font-semibold text-orange-600 mb-2">🚚 Fast Delivery</h2>
                <p className="text-gray-700">Get hot, delicious pizza delivered to your doorstep in under 30 minutes — because hunger waits for no one.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h2 className="text-xl font-semibold text-orange-600 mb-2">🧼 Hygienic Kitchens</h2>
                <p className="text-gray-700">Our chefs work in spotless, safety-certified kitchens to ensure every meal is prepared with the highest standards.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h2 className="text-xl font-semibold text-orange-600 mb-2">🧑‍🍳 Expert Chefs</h2>
                <p className="text-gray-700">Our experienced team crafts each pizza with finesse, blending traditional methods with bold flavor experiments.</p>
            </div>
            </div>
        </section>
        </Layout>
    );
}

export default ServicesPage;