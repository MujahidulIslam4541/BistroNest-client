import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa";

const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_URL;
const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

const AddItem = () => {
  const axiosPublic = useAxiosOpen();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    // console.log("Form data:", data);

    // Prepare the image file for upload
    const imageFile = { image: data.image[0] };

    try {
      // Upload the image to ImgBB
      const res = await axiosPublic.post(imgUploadUrl, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // If image upload is successful
      if (res.data.success) {
        const imageUrl = res.data.data.display_url;

        // Create menu item data to send to the server
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: imageUrl,
        };

        // Send menu data to the server (secured endpoint)
        const menuData = await axiosSecure.post("/menu", menuItem);

        // If menu item is successfully added
        if (menuData.data.insertedId) {
          toast.success("Menu item added successfully!");
          reset(); // Reset form fields
        }

        // console.log("Menu data response:", menuData.data);
      }

      // console.log("Image upload response:", res.data);
    } catch (error) {
      toast.error("Something went wrong. Please try again.", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      {/* Section Heading */}
      <SectionTitle subHeading="What's new?" heading="Add an Item" />

      {/* Add Item Form Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2"></div>

          <div className="px-8 py-10 md:px-12 md:py-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Recipe Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Recipe Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="e.g., Chocolate Lava Cake"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400"
                />
              </div>

              {/* Category + Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("category")}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none text-gray-800 bg-white appearance-none cursor-pointer"
                    defaultValue=""
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5rem",
                    }}
                  >
                    <option disabled value="">
                      Choose a category
                    </option>
                    <option value="dessert">🍰 Dessert</option>
                    <option value="pizza">🍕 Pizza</option>
                    <option value="salad">🥗 Salad</option>
                    <option value="soup">🍲 Soup</option>
                    <option value="drinks">🍹 Drinks</option>
                  </select>
                </div>

                {/* Price */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <input
                      {...register("price")}
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      className="w-full pl-10 pr-5 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Recipe Details
                </label>
                <textarea
                  {...register("recipe")}
                  placeholder="Describe your recipe, ingredients, cooking steps, and special notes..."
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400 resize-none h-36"
                ></textarea>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Image *</label>
                <input type="file" {...register("image")} className="file-input file-input-bordered " />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 text-lg group"
                >
                  <FaUtensils className="group-hover:rotate-12 transition-transform duration-300" />
                  Add Item to Menu
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-amber-500">
            <h3 className="font-bold text-gray-800 mb-2">✨ High Quality</h3>
            <p className="text-sm text-gray-600">Upload clear images for best results</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
            <h3 className="font-bold text-gray-800 mb-2">📝 Be Detailed</h3>
            <p className="text-sm text-gray-600">Include all recipe information</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-amber-600">
            <h3 className="font-bold text-gray-800 mb-2">💰 Fair Pricing</h3>
            <p className="text-sm text-gray-600">Set competitive market prices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
