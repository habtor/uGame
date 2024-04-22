import { games } from "../../data/gamesArray";
import { FaFireAlt } from "react-icons/fa";
import { TiStarOutline } from "react-icons/ti";
// import { CgGames } from "react-icons/cg";
import { FaEuroSign } from "react-icons/fa";

function HotGames() {
  return (
    <div className="mainBackgroud rounded-lg p-4 pt-2">
      <span className="text-green2 text-2xl flex items-center">
        <FaFireAlt className="mr-2" />
        Hot Games
      </span>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        {games.map((game) => (
          <div
            key={game.key}
            className="flex flex-col w-full mt-5 sm:m-3 rounded-lg shadow-slate-700 "
          >
            <div
              className="bg-cover bg-center w-full h-64 rounded-lg "
              style={{
                backgroundImage: `url(${game.image})`,
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div></div>
                <div className="flex flex-col justify-between h-1/4 backdrop-blur-md text-white px-2 py-1 rounded-lg bg-slate-700 bg-opacity-25 m-1">
                  <div className="flex justify-between">
                    <span className="text-gray-100">{game.name}</span>
                    <div className="flex items-center">
                      <FaEuroSign className="text-sm" />{" "}
                      <span>{game.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <TiStarOutline className="text-xl mr-1" />
                      {game.rating}
                    </span>
                    <span className="flex items-center">
                      {/* <CgGames className="text-xl mr-1" /> */}
                      {game.players} players
                    </span>
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
