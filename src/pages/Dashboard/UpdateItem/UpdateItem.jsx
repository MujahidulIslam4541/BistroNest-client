import React from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom'
import toast from 'react-hot-toast'
import useAxiosOpen from '../../../hooks/useAxiosOpen'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useForm } from 'react-hook-form'
import { FaUtensils } from 'react-icons/fa'


const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_URL;
const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
const UpdateItem = () => {
    const { item } = useLoaderData()
    console.log(item)
    const axiosPublic = useAxiosOpen();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {

        // Prepare the image file for upload
        const imageFile = { image: data.image[0] };

        try {
            // Upload the image to ImgBB
            const res = await axiosPublic.post(imgUploadUrl, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
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
                    image: imageUrl
                };

                // Send menu data to the server (secured endpoint)
                const menuData = await axiosSecure.post('/menu', menuItem);

                // If menu item is successfully added
                if (menuData.data.insertedId) {
                    toast.success('Menu item added successfully!');
                    reset(); // Reset form fields
                }

                // console.log("Menu data response:", menuData.data);
            }
        } catch (error) {

            toast.error("Something went wrong. Please try again.", error.message);
        }
    };



    return (
        <div>
            <SectionTitle subHeading='Update Item' heading='Update Your Item'></SectionTitle>

            {/* update menu item */}
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
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateItem
