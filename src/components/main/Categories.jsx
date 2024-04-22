import { MdOutlineWindow } from "react-icons/md";
import { games } from "../../data/gamesArray";

function Category() {
  return (
    <div className="mainBackgroud rounded-lg p-4 mt-4">
      <span className="text-green2 text-2xl flex items-center">
        <MdOutlineWindow className="mr-2" />
        Categories
      </span>
      <div className="overflow-auto p-2 ">
        <span className="m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer">
          Shooter
        </span>
        <span className="m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer">
          Adventure
        </span>
        <span className="m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer">
          Action
        </span>
        <span className="m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer">
          RPG
        </span>
        <span className="m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer">
          Sports
        </span>
        <span className="m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer">
          Racing
        </span>
      </div>

      <div className="flex flex-col justify-center items-center">
        {games.map((game) => (
          <div key={game.key} className="flex flex-col w-full mt-5 ">
            <div
              className="bg-cover bg-center w-full h-48 rounded-lg "
              style={{
                backgroundImage: `url(${game.image})`,
              }}
            ></div>

            <div className="flex flex-col">
              <span>{game.name}</span>
              <span>${game.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
