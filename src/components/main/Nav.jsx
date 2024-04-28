import { FaGamepad } from "react-icons/fa";

function Nav() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center">
        <div className="relative flex flex-col items-center text-lg text-green2 ml-6">
          <FaGamepad className="text-3xl z-20" />
          <span className=" absolute top-[18px] uGame">uGAME</span>
        </div>
        <ul className="flex ml-16">
          <li className="">Home</li>
          <li className="ml-12">Games</li>
          <li className="ml-12">Chat</li>
        </ul>
      </div>

      <div
        className="bg-cover bg-center w-9 h-9 rounded-full mr-4 m-1 border-[1px] border-green2"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqiS-e5Yt-EPvtFU9FTAeQ5fBXp1tHVt0krjGwcbIhazpa7GrAzYY90psT0aDmOQxVE4&usqp=CAU)`,
        }}
      ></div>
    </div>
  );
}

export default Nav;
