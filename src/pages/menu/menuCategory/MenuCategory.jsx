import MenuItems from "../../../components/menuItems/MenuItems"


const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8 mx-4 md:mx-0 mt-16'>
        {
          items?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
        }
      </div>
      <div className='flex justify-center items-center mb-10'>
        <button className="border-b-2 border-black hover:bg-orange-400 hover:text-white transition-all px-6 py-2 rounded-md mt-2">
          Order Your Favorite Food
        </button>
      </div>
    </div>
  )
}

export default MenuCategory
