import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import useNavBarFilter from "../hooks/NavBarFliter";
import { useState } from "react";

function NavBar() {
  const { filter, setFilter } = useNavBarFilter();
  const [linkColor, setLinkColor] = useState("text-green");

  const handleFilter = (linkName) => {
    setFilter(linkName);
    setLinkColor("text-green");
  };

  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-3 bg-gray-950">
      <div
        className={`${
          filter === "Feed" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("Feed")}
      >
        <BiHomeAlt className="text-2xl" />
        feed
      </div>
      <div
        className={`${
          filter === "Games" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("Games")}
      >
        <MdOutlineGames className="text-2xl  " />
        <span className="text-[10px] ">Games</span>
      </div>
      <div
        className={`${
          filter === "Chat" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("Chat")}
      >
        <HiOutlineChatAlt2 className="text-2xl " />
        <span className="text-[10px]">Chat</span>
      </div>
      <div
        className={`${
          filter === "Profile" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("Profile")}
      >
        <BsPerson className="text-2xl " />
        <span className="text-[10px]">Profile</span>
      </div>
    </div>
  );
}

export default NavBar;
