import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import useNavBarFilter from "../hooks/NavBarFliter";
import { useState } from "react";

function NavBar() {
  const { filter, setFilter } = useNavBarFilter();
  const [linkColor, setLinkColor] = useState("text-green");
  console.log(filter);

  const handleFilter = (e) => {
    setFilter(e);
    console.log(filter, "as");
    setLinkColor("text-green");
  };
  console.log(filter);

  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-3 bg-gray-950">
      <div
        className={`${
          filter === "feed" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("feed")}
      >
        <BiHomeAlt className="text-2xl" />
        feed
      </div>
      <div
        className={`${
          filter === "games" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("games")}
      >
        <MdOutlineGames className="text-2xl  " />
        <span className="text-[10px] ">Games</span>
      </div>
      <div
        className={`${
          filter === "chat" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("chat")}
      >
        <HiOutlineChatAlt2 className="text-2xl " />
        <span className="text-[10px]">Chat</span>
      </div>
      <div
        className={`${
          filter === "profile" ? linkColor : ""
        } text-[10px] flex flex-col justify-center items-center hover:text-green transition-colors duration-300 cursor-pointer`}
        onClick={() => handleFilter("profile")}
      >
        <BsPerson className="text-2xl " />
        <span className="text-[10px]">Profile</span>
      </div>
    </div>
  );
}

export default NavBar;
