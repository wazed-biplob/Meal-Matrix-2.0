import SectionHeading from "./SectionHeading";

const AboutUs = () => {
  return (
    <div className="pt-10">
      <SectionHeading subtitle="Our journey began with a simple idea: to bring gourmet experiences to homes everywhere. We believe that food is more than just sustenance; it is a celebration of life, a bridge between cultures, and a source of joy and connection.">
        About Us
      </SectionHeading>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center text-5xl font-bold text-green-500 md:text-left">
                Who We Are
              </p>

              <h1 className="mb-4 mt-2 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Meal-Matrix at a Glance
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Welcome to Meal-Matrix, your trusted partner in ensuring that
                every community has access to nutritious meals and essential
                supplies. At NutriServe, we believe that access to healthy food
                and basic necessities is a fundamental right for every
                individual, regardless of their socio-economic status. Our
                mission is to bridge the gap between surplus and need, creating
                a sustainable and efficient food distribution network that
                serves communities across the nation.
              </p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://i.ibb.co/q7KssHc/Meal-Matrix.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Our vision is a world where no one goes hungry and everyone has
                access to the resources they need to thrive. We strive to create
                a future where food waste is minimized, and every community is
                empowered with the tools and resources necessary for sustainable
                living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
