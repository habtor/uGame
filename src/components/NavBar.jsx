import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-3 bg-gray-950">
      <div className="flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer">
        <BiHomeAlt className="text-2xl" />
        <span className="text-[10px]">Feed</span>
      </div>
      <div className="flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer">
        <MdOutlineGames className="text-2xl  " />
        <span className="text-[10px] ">Games</span>
      </div>
      <div className="flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer">
        <HiOutlineChatAlt2 className="text-2xl " />
        <span className="text-[10px]">Chat</span>
      </div>
      <div className="flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer">
        <BsPerson className="text-2xl " />
        <span className="text-[10px]">Profile</span>
      </div>
    </div>
  );
}

export default NavBar;
