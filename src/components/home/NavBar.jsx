import { FaGamepad } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineGames } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import useNavBarFilter from "../../hooks/NavBarFliter";
import { useState } from "react";

function NavBar() {
  const { filter, setFilter } = useNavBarFilter();
  const [linkColor, setLinkColor] = useState("text-green");
  const [showLinks, setShowLinks] = useState(false);

  const handleFilter = (linkName) => {
    setFilter(linkName);
    setLinkColor("text-green");
    setShowLinks(!showLinks);
  };
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="sticky top-0 z-20">
      <div className="sticky top-0  sm:max-w-1200 sm:w-full w-[306px] lseft-0 flex justify-between items-center  bg-green2 rounded-t-lg z-20">
        <FaGamepad className="text-green text-4xl ml-4 " />
        <div className="flex justify-center headingColor">
          <span className="text-lg cursor-pointer" onClick={handleShowLinks}>
            {/* {filter == "Feed" ? `My ${filter}` : `${filter}`} */}
            <FaArrowDown className=" animate-bounce flip rotate-180" />
          </span>
        </div>
        <div className="flex justify-end">
          <div
            className="bg-cover bg-center w-9 h-9 rounded-full mr-4 m-1"
            style={{
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqiS-e5Yt-EPvtFU9FTAeQ5fBXp1tHVt0krjGwcbIhazpa7GrAzYY90psT0aDmOQxVE4&usqp=CAU)`,
            }}
          ></div>
        </div>
      </div>
      <div
        className={`${
          showLinks ? "top-11" : "top-0"
        }  py-1  a absolute sm:w-full w-[306px] flex items-center justify-between px-5   bg-gray-950 z-10`}
      >
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
    </div>
  );
}

export default NavBar;
