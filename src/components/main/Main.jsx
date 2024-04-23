import Feed from "./Feed";
import HotGames from "./HotGames";
import useNavBarFilter from "../../hooks/NavBarFliter";
import Games from "./Games";

function Main() {
  const { filter } = useNavBarFilter();
  return (
    <div className="mt-14 mx-3">
      {filter === "Feed" ? (
        <>
          <HotGames />
          <Feed />
        </>
      ) : filter === "Games" ? (
        <>
          <Games />
        </>
      ) : null}
    </div>
  );
}

export default Main;
