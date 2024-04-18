import Feed from "./Feed";
import HotGames from "./HotGames";
import useNavBarFilter from "../hooks/NavBarFliter";

function Main() {
  const { filter } = useNavBarFilter();
  return (
    <>
      <HotGames />
      {filter === "feed" ? <Feed /> : ""}
    </>
  );
}

export default Main;
