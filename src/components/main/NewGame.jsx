import { TiStarOutline } from "react-icons/ti";
import { CgGames } from "react-icons/cg";
import { FaEuroSign } from "react-icons/fa";
import { games } from "../../data/gamesArray";

function NewGame() {
  return (
    <div
      className="flex flex-col relative w-full h-64 sm:h-[396px] justify-between bg-cover bg-center overflow-hidden border-[1px] border-gray-300 rounded-lg shadow-slate-700 cursor-pointer border-b-gray-500"
      style={{
        backgroundImage: `url(${games[3].image})`,
      }}
    >
      <div className="sm:h-full w-full bg-gradient-to-r from-gray-800 from-0% via-transparent via-50% ">
        <div className="flex flex-col p-6 justify-between h-full ">
          <div className=" h-1/4 sm:w-1/3 sm:h-fit  bsg-slate-500 bg-opacity-70 rounded-lg">
            <span className="text-2xl">
              {games[0].description} <br />
            </span>
          </div>
          <div className=" relative w-full flex justify-between">
            <div className="flex">
              <span className=" flex items-center mr-5">
                <TiStarOutline className="text-yellow-500 text-2xl mr-1" />
                <span>{games[0].rating}</span>
              </span>
              <span className=" flex items-center mr-5">
                <FaEuroSign className="text-green-500 text-lg mr-1" />
                <span>{games[0].price}</span>
              </span>
              <span className=" flex items-center mr-5">
                <CgGames className="text-slate-300 text-2xl mr-1" />
                <span>{games[0].players}</span>
              </span>
            </div>
            <div className=" hidden sm:flex absolute bottom-0 right-0 overflow-auto bg-slate-700 bg-opacity-70 p-1 rounded-lg backdrop-blur-md">
              {games[0].screenShots.map((screenShot) => (
                <div
                  key={games[0].screenShots.indexOf(screenShot)}
                  className="h-24 w-32 bg-cover bg-center overflow-hidden rounded-lg  cursor-pointer  m-1"
                  style={{
                    backgroundImage: `url(${screenShot})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGame;
