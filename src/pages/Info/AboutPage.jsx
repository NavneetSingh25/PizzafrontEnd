import Layout from "../../Layouts/Layout";

function AboutPage() {
    return (
        <Layout>
        <section className="py-16 px-6 bg-gradient-to-r from-orange-100 to-orange-300 text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-4">
            Who We Are
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            🍕 Born from your heart, we're a passionate team of food lovers crafting fresh pizzas with love, spice, and the perfect crust.
            Our mission is simple — deliver joy in every bite and bring people together through flavor.
            From cozy family dinners to late-night cravings, we’re more than a pizza shop — we’re your neighborhood slice of happiness.
            </p>
        </section>
        </Layout>
    );
}

export default AboutPage;