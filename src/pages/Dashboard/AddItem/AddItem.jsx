import { useForm } from "react-hook-form"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import { FaUtensils } from "react-icons/fa"


const AddItem = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
