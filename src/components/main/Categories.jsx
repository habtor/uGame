import { MdOutlineWindow } from "react-icons/md";
import { games } from "../../data/gamesArray";
import { useState } from "react";

function Category() {
  const [category, setCategory] = useState("All");
  const handleOnClick = (e) => {
    setCategory(e.target.innerText);
  };

  return (
    <div className="mainBackgroud rounded-lg p-4 mt-10 border-y-[1px] border-green2">
      <span className="text-green2 text-2xl flex items-center">
        <MdOutlineWindow className="mr-2" />
        Categories
      </span>
      <div className="overflow-auto p-2 ">
        <span
          className={`${
            category === "Shooter" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          Shooter
        </span>
        <span
          className={`${
            category === "Adventure" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          Adventure
        </span>
        <span
          className={`${
            category === "Action" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          Action
        </span>
        <span
          className={`${
            category === "RPG" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          RPG
        </span>
        <span
          className={`${
            category === "Sports" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          Sports
        </span>
        <span
          className={`${
            category === "Racing" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          Racing
        </span>
        <span
          className={`${
            category === "All" ? "text-green2 " : ""
          }m-1 bg-gray-600 px-2 py-1 bg-opacity-50 rounded-2xl hover:bg-opacity-85 cursor-pointer`}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          All
        </span>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mainBackgroud rounded-lg  mt-5 overflow-auto pb-5 min-h-80">
        {category !== "All"
          ? games
              .filter((game) => game.category === category)
              .map((game) => (
                <div
                  key={game.key}
                  className="flex flex-col rounded-lg justify-self-center border-[1px] border-green2 p-1 "
                >
                  <div
                    className="bg-cover bg-center w-56 h-64 rounded-lg "
                    style={{
                      backgroundImage: `url(${game.image})`,
                    }}
                  ></div>

                  <div className="flex flex-col">
                    <span>{game.name}</span>
                    <div className="flex justify-between">
                      <span>${game.price}</span>
                      <span>{game.rating}</span>
                      <span>{game.players}</span>
                    </div>
                  </div>
                </div>
              ))
          : games.map((game) => (
              <div
                key={game.key}
                className="flex flex-col rounded-lg justify-self-center border-[1px] border-green2 p-1 "
              >
                <div
                  className="bg-cover bg-center w-56 h-64 rounded-lg "
                  style={{
                    backgroundImage: `url(${game.image})`,
                  }}
                ></div>

                <div className="flex flex-col">
                  <span>{game.name}</span>
                  <div className="flex justify-between">
                    <span>${game.price}</span>
                    <span>{game.rating}</span>
                    <span>{game.players}</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Category;
