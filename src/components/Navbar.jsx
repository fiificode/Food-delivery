import React,{useState} from 'react'
import { AiOutlineMenuFold,AiOutlineSearch,AiOutlineShoppingCart,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdOutlineFavorite} from 'react-icons/md'
import {FaWallet} from 'react-icons/fa'
import {IoHelpCircle} from 'react-icons/io5'
import {BsFillArrowDownSquareFill,BsFillPeopleFill} from 'react-icons/bs'



const Navbar = () => {
    const [nav,setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side  */}
        <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenuFold size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Search field  */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search..' />
        </div>
        {/* Cart button  */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <AiOutlineShoppingCart size={20} className='mr-2'/> Cart
        </button>

        {/* Mobile Menu  */}
        {/* Overlay  */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> :'' }
        
        {/* Side draw menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='flex py-4 text-xl'>
                        <TbTruckDelivery size={25} className='mr-4' /> Orders
                    </li>
                    <li className='flex py-4 text-xl'>
                        <MdOutlineFavorite size={25} className='mr-4' /> Favorites
                    </li>
                    <li className='flex py-4 text-xl'>
                        <FaWallet size={25} className='mr-4' /> Wallet
                    </li>
                    <li className='flex py-4 text-xl'>
                        <IoHelpCircle size={25} className='mr-4' /> Help
                    </li>
                    <li className='flex py-4 text-xl'>
                        <AiFillTag size={25} className='mr-4' /> Promotions
                    </li>
                    <li className='flex py-4 text-xl'>
                        <BsFillArrowDownSquareFill size={25} className='mr-4' /> Best One
                    </li>
                    <li className='flex py-4 text-xl'>
                        <BsFillPeopleFill size={25} className='mr-4' /> Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Navbar