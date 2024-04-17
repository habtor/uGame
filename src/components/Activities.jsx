import { SlFeed } from "react-icons/sl";
import { gamers } from "./games";

function Activites() {
  return (
    <div className="mainBackgroud rounded-lg mt-2 px-3">
      <div className="flex items-center p-2">
        <SlFeed className="text-green text-2xl mr-2" />
        <span>Feed</span>
      </div>
      <div className="overflow-y-auto max-h-[470px]">
        {gamers.map((gamer) => (
          <div
            key={gamer.key}
            className="flex items-center text-sm p-2 bg-slate-600 bg-opacity-15 rounded-lg mt-1"
          >
            <div
              className="bg-cover bg-center w-12 h-12 rounded-full flex-shrink-0"
              style={{
                backgroundImage: `url(${gamer.image})`,
              }}
            ></div>

            <span className="ml-3">{gamer.activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activites;
