import Activites from "./Activities";
import HotGames from "./HotGames";

function Main() {
  return (
    <div className="bg-darkColor rounded-t-xl h- pt-1">
      <div className="flex flex-col m-2 rounded-xl mt-2 h-">
        <HotGames />
        <div className="overflow-auto h-">
          <Activites />
        </div>
      </div>
    </div>
  );
}

export default Main;
