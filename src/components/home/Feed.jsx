import { gamers } from "../../data/gamesArray";
import { SlFeed } from "react-icons/sl";

function Feed() {
  return (
    <>
      <div className="flex items-center pl-3 py-2 mainBackgroud mx-2 rounded-t-lg">
        <SlFeed className="text-green text-2xl mr-2" />
        <span>Feed</span>
      </div>
      <div className=" mt-0 px-3 overflow-auto mainBackgroud mx-2">
        <div className=" rounded-lg  t-2">
          {gamers.map((gamer) => (
            <div
              key={gamer.key}
              className="flex items-center text-sm p-2 bg-slate-600 bg-opacity-15 rounded-lg mt-1 "
            >
              <div
                className="bg-cover bg-center w-12 h-12 rounded-full flex-shrink-0"
                style={{
                  backgroundImage: `url(${gamer.image})`,
                }}
              ></div>
              <span className="ml-3">
                <span className="text-green">{gamer.name}</span>{" "}
                {gamer.activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
