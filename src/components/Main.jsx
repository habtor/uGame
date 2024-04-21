import Feed from "./Feed";
import HotGames from "./HotGames";
import useNavBarFilter from "../hooks/NavBarFliter";
import Games from "./Games";

function Main() {
  const { filter } = useNavBarFilter();
  return (
    <>
      {filter === "Feed" ? (
        <>
          <HotGames />
          <Feed />
        </>
      ) : filter === "Games" ? (
        <Games />
      ) : null}
    </>
  );
}

export default Main;


