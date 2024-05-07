import { FaGamepad } from "react-icons/fa";
import { useState } from "react";
import useNavBarFilter from "../../hooks/NavBarFliter";

function Nav() {
  const [menu, setMenu] = useState(false);
  const { filter, setFilter } = useNavBarFilter();

  const handleFilter = (linkName) => {
    setFilter(linkName);
  };

  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="flex justify-between w-full items-center px-3 bg-green2 sm:bg-opacity-90 rounded-t-xl">
      <div className="flex items-center w-40 justify-between">
        <div className="relative flex flex-col items-center text-lg text-black sm:tesxt-green2 ml-6 ">
          <FaGamepad className="text-3xl z-20 absolute bottom-[-5px] " />
          <span className=" absolute top-[-6px] uGame ">uGAME</span>
        </div>
        <div
          className={`${
            menu ? "sm:hiddsen" : "flex flex-col items-center"
          } text-lg`}
        >
          <span
            className="sm:hidden cursor-pointer text-black"
            onClick={showMenu}
          >
            {filter === "Home"
              ? `Home >`
              : filter === "Games"
              ? "Games >"
              : "Chat >"}
          </span>
          <ul className={`sm:flex hidden ml-28 text-black`}>
            <li
              className={`${
                filter === "Home" ? "text-white" : ""
              } cursor-pointer`}
              onClick={() => handleFilter("Home")}
            >
              Home
            </li>
            <li
              className={`${
                filter === "Games" ? "text-white" : ""
              } cursor-pointer ml-12`}
              onClick={() => handleFilter("Games")}
            >
              Games
            </li>
            <li
              className={`${
                filter === "Chat" ? "text-white" : ""
              } cursor-pointer ml-12`}
              onClick={() => handleFilter("Chat")}
            >
              Chat
            </li>
          </ul>
          <ul
            className={`sm:hidden absolute top-16 items-center flex flex-col bg-main w-full left-0 ${
              !menu ? "hidden" : "flex"
            } 
             z-20`}
          >
            <li
              className="cursor-pointer hover:text-green2"
              onClick={() => handleFilter("Home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-green2"
              onClick={() => handleFilter("Games")}
            >
              Games
            </li>
            <li
              className="cursor-pointer hover:text-green2"
              onClick={() => handleFilter("Chat")}
            >
              Chat
            </li>
          </ul>
        </div>
      </div>

      <div
        className="bg-cover bg-center w-9 h-9 rounded-full mr-0 m-1 border-[1px] border-green2"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqiS-e5Yt-EPvtFU9FTAeQ5fBXp1tHVt0krjGwcbIhazpa7GrAzYY90psT0aDmOQxVE4&usqp=CAU)`,
        }}
      ></div>
    </nav>
  );
}

export default Nav;
