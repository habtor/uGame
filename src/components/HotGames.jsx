import { useRef, useState } from "react";
import { LiaFireAltSolid } from "react-icons/lia";
import { games } from "./games";

function HotGames() {
  const containerRef = useRef(null);
  const [backColor1, setBackColor1] = useState("bg-red-500");
  const [backColor2, setBackColor2] = useState("bg-gray-500");

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    setBackColor2("bg-red-500");
    setBackColor1("bg-gray-500");
  };
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    setBackColor1("bg-red-500");
    setBackColor2("bg-gray-500");
  };

  return (
    <div className="mainBackgroud rounded-lg pb-4 m-2">
      <div className="flex items-center p-2">
        <LiaFireAltSolid className="text-green text-4xl " />
        <span className="text-lg">Hot games</span>
      </div>
      <div>
        <div
          className="flex m-1 items-center  overflow-x-auto  "
          ref={containerRef}
        >
          <div className=" flex items-center ">
            {games.map((game) => (
              <div key={game.key} className="flex items-center w-full m-3 mt-0">
                <div
                  className="bg-cover bg-center w-32 h-24 rounded-l-lg "
                  style={{
                    backgroundImage: `url(${game.image})`,
                  }}
                ></div>
                <div className="flex bg-darkColor h-24 w-32 p-2 rounded-r-lg items-center justify-center ">
                  {game.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`${backColor1} h-1 w-5 rounded-full text-white left-36 bg-opacity-70 mx-1`}
            onClick={scrollLeft}
          ></button>
          <button
            className={`${backColor2} h-1 w-5 rounded-full text-white left-36 bg-opacity-70`}
            onClick={scrollRight}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default HotGames;
