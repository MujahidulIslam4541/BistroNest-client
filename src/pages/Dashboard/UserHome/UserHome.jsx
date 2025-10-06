import UseContext from '../../../hooks/useContext'

const UserHome = () => {

    const { user } = UseContext()
    return (
        <div>
            Hi! Welcome Back {user?.displayName}

            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-amber-300'>fdgvdgd</div>
                <div className='bg-red-300'>dfgvdvgdg</div>
                <div className='bg-blue-300'>fdvgdddddd</div>
            </div>

        </div>
    )
}

export default UserHome
