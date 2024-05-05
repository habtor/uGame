import { games } from "../../data/gamesArray";
import { FaFireAlt } from "react-icons/fa";
import { TiStarOutline } from "react-icons/ti";
import { CgGames } from "react-icons/cg";
import { FaEuroSign } from "react-icons/fa";

function HotGames() {
  return (
    <div className="mainBackgroud rounded-lg p-4 pt-2 border-y-[1px] border-green2  mt-10">
      {/* sm:mt-[-20px] mt-[-42px] */}
      <span className="text-gsreen2 text-2xl flex items-center text-green2 my-2">
        <FaFireAlt className="mr-2 " />
        <span>Hot Games</span>
      </span>

      <div className="flex flex-col sm:flex-row items-center overflow-auto max-h-[500px]">
        {games.map((game) => (
          <div
            key={game.key}
            className="flex flex-col w-full mt-5 sm:m-3 rounded-lg "
          >
            <div
              className="bg-cover bg-center sm:w-60 h-64 sm:h-96 rounded-lg"
              style={{
                backgroundImage: `url(${game.image})`,
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-end">
                  <span className="bg-gray-900 bg-opacity-40 border-2 border-green2 rounded-bl-xl rounded-tr-lg px-2 w-16 text-center">
                    {game.category}
                  </span>
                </div>
                <div className="myDiv relative h-[100px] w-full bg-opacity-70 bg-slate-700">
                  <svg className="absolute bottom-0 h-full w-full ">
                    <clipPath
                      id="hotGames-clip-path"
                      clipPathUnits="objectBoundingBox"
                    >
                      <path d="M1,0.951 V0.384 C1,0.354,0.994,0.33,0.984,0.33 H0.498 C0.494,0.33,0.49,0.325,0.487,0.317 L0.38,0.018 C0.377,0.009,0.373,0.004,0.369,0.004 L0.018,0.004 C0.009,0.004,0.001,0.028,0.001,0.058 L0.001,0.951 C0.001,0.98,0.009,1,0.018,1 H0.984 C0.994,1,1,0.98,1,0.951"></path>
                    </clipPath>
                  </svg>
                  <div className="flex flex-col justify-between h-full p-2">
                    <div className="pl-2 flex flex-col justify-between">
                      <span className="flex items-center">
                        <FaEuroSign className="text-sm text-green-400" />
                        <span>{game.price}</span>
                      </span>
                      <span className="flex items-end ">{game.name}</span>
                    </div>
                    <div className="flex justify-between px-2">
                      <span className="flex">
                        <TiStarOutline className="text-xl mr-1 text-yellow-500" />
                        {game.rating}
                      </span>
                      <span className="flex items-center">
                        <CgGames className="mr-2 text-xl" />
                        <span>{game.players} Players</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotGames;
