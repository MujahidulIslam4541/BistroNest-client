import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover mt-24"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="bg-black/60 text-white py-16 px-4 md:px-28">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <SectionTitle heading="Featured Item" subHeading="Check it Out" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="order-2 md:order-1 space-y-3">
            <h3 className="text-sm uppercase">July 02, 2025</h3>
            <h1 className="text-3xl md:text-4xl font-bold uppercase">
              Where Can I Get Some?
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Discover the story behind our featured dish — carefully crafted with
              handpicked ingredients and timeless flavors. Taste the difference that
              passion makes in every bite.
            </p>
            <button className="border-b-2 border-white hover:bg-white hover:text-black transition-all px-6 py-2 rounded-md mt-2">
              Read More
            </button>
          </div>

          {/* Image preview (optional) */}
          <div className="order-1 md:order-2">
            <img
              src={featuredImg}
              alt="Featured Dish"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
