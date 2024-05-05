import { FaGamepad } from "react-icons/fa";
import { useState } from "react";

function Nav() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="flex justify-between w-full items-center px-3 bg-green2 sm:bg-opacity-0 rounded-t-xl">
      <div className="flex items-center w-40 justify-between">
        <div className="relative flex flex-col items-center text-lg text-black sm:text-green2 ml-6 ">
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
            Home
          </span>
          <ul className={`sm:flex hidden ml-28`}>
            <li className="cursor-pointer">Home</li>
            <li className="ml-12 cursor-pointer">Games</li>
            <li className="ml-12 cursor-pointer">Chat</li>
          </ul>
          <ul
            className={`sm:hidden absolute top-16 items-center flex flex-col ${
              !menu ? "hidden" : "flex"
            } 
             z-20`}
          >
            <li className="cursor-pointer hover:text-green2">Home</li>
            <li className="cursor-pointer hover:text-green2">Games</li>
            <li className="cursor-pointer hover:text-green2">Chat</li>
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
