import { useForm } from "react-hook-form"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import { FaUtensils } from "react-icons/fa"
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_URL;
const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
const AddItem = () => {
    const axiosPublic = useAxiosOpen()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload img bb and get the url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imgUploadUrl, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu data to the server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuData = await axiosSecure.post('/menu', menuItem)
            if (menuData.data.insertedId) {
                toast.success('Menu item added successfully!')
                reset()
            }
            console.log('menu data', menuData.data)
        }
        console.log('image upload url', res.data)
    }


    return (
        <div>
            {/* section heading  */}
            <SectionTitle subHeading='What is new?' heading='Add an Item'></SectionTitle>


            {/* add item form section */}
            <div className="max-w-4xl mx-auto mt-8 px-6 py-8 bg-base-300 shadow-lg rounded-2xl">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Recipe Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Recipe Name *</label>
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="Enter recipe name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Category + Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Category *</label>
                            <select
                                {...register("category")}
                                className="select select-bordered w-full"
                                defaultValue=""
                            >
                                <option disabled value="">
                                    Select Category
                                </option>
                                <option>Dessert</option>
                                <option>Pizza</option>
                                <option>Salad</option>
                                <option>Soup</option>
                                <option>Drinks</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Price *</label>
                            <input
                                {...register("price")}
                                type="number"
                                placeholder="Enter price"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Recipe Details
                        </label>
                        <textarea
                            {...register("recipe")}
                            placeholder="Write recipe details here..."
                            className="textarea textarea-bordered w-full h-28 resize-none"
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Upload Image *
                        </label>
                        <input
                            type="file"
                            {...register("image")}
                            className="file-input file-input-bordered "
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="">
                        <button
                            type="submit"
                            className="btn bg-[#D1A054] hover:bg-[#b37335] text-white px-6 flex items-center gap-2 shadow-md"
                        >
                            <FaUtensils />
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItem
