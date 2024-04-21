import { FaGamepad } from "react-icons/fa";
import { games } from "./gamesArray";

function Games() {
  return (
    <div className="mt-2">
      <div className="flex flex-col pl-3  py-2 mainBackgroud mx-2 rounded-t-lg ">
        <div>
          <h1 className="text-2xl">
            Hi Saleh, <br></br>Ready to play?
          </h1>
        </div>
        <div className="">
          <div className="mt-4">
            <span>Categories</span>
            <div className="flex overflow-auto">
              <div className="bg-gray-500 bg-opacity-40 rounded-3xl px-2 mr-1">
                Shooter
              </div>
              <div className="bg-gray-500 bg-opacity-40 rounded-3xl px-2 mr-1">
                Action
              </div>
              <div className="bg-gray-500 bg-opacity-40 rounded-3xl px-2 mr-1">
                Advanture
              </div>
              <div className="bg-gray-500 bg-opacity-40 rounded-3xl px-2 mr-1">
                Platformer
              </div>
              <div className="bg-gray-500 bg-opacity-40 rounded-3xl px-2 mr-1">
                Horror
              </div>
              <div className="bg-gray-500 bg-opacity-40 rounded-3xl px-2 mr-1">
                Strategy
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span>Top games</span>
            <div className="flex overflow-auto mt-2">
              {games.map((game) => (
                <div
                  key={game.key}
                  className="flex bg-darkColor bg-opacity-30 rounded-lg  "
                >
                  <div
                    className="bg-cover bg-center w-28 h-36 rounded-lg mr-2 "
                    style={{
                      backgroundImage: `url(${game.image})`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 bg-red-300  mt-5 p-5">
            <div className=" rounded-lg t-2 p-5 bg-black">
              {games.map((game) => (
                <div key={game.key} className="flex  w-full mt-2 ">
                  <div
                    className="bg-cover bg-center w-full h-24 rounded-l-lg "
                    style={{
                      backgroundImage: `url(${game.image})`,
                    }}
                  ></div>
                  <div className="flex bg-darkColor h-24 w-full p-2 rounded-r-lg items-center justify-center ">
                    {game.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
