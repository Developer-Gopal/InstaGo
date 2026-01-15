import instfont from '../assets/instfont.png';
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { BsCameraReelsFill } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

const SideBar =()=>{
    return(
        <>
        <div className="flex flex-col justify-between items-start h-screen  px-6 py-8 fixed">
          <div className='flex flex-col gap-8 '>
            <img src={instfont} alt="" className='h-10' />

            <div className='flex flex-row gap-4 '>
              <GoHomeFill size={26} />
              <a href="">Home</a>
            </div>
            <div className='flex flex-row gap-4 '>

              <IoSearchOutline size={26} />
              <a href="">Search</a>
            </div>
            <div className='flex flex-row gap-4 '>
              <MdOutlineExplore size={26} />
              <a href="">Explore</a>
            </div>
            <div className='flex flex-row gap-4 '>
              <BsCameraReelsFill size={22} />
              <a href="">Reels</a>
            </div>
            <div className='flex 
            flex-row gap-4 '>
              <LiaTelegram size={26} />
              <a href="">Messages</a>
            </div>
            <div className='flex flex-row gap-4 '>
              <FaRegHeart size={24} />
              <a href="">Notification</a>
            </div>
            <div className='flex flex-row gap-4 '>
              <FiPlus size={26} />
              <a href="">Create</a>
            </div>
            <div className='flex flex-row gap-4 '>
              <CgProfile size={24} />
              <a href="">Profile</a>
            </div>




          </div>

          <div className='flex flex-row gap-4 '>
            <IoMdMenu size={24}/>
            <a href="" className=''>More</a>
          </div>

        </div> 

        </>
         
    )
}

export default SideBar;