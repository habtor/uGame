// import Feed from "./home/Feed";
// import HotGames from "./home/HotGame";
import useNavBarFilter from "../hooks/NavBarFliter";
import Games from "./home/Games";
import MyGames from "./myGames/MyGames";

function Main() {
  const { filter } = useNavBarFilter();
  return (
    <div className="mt-0">
      {filter === "Games" ? (
        <>
          <Games />
          {/* <HotGames />
          <Feed /> */}
        </>
      ) : filter === "Home" ? (
        <>
          {/* <Games /> */}
          <MyGames />
        </>
      ) : null}
    </div>
  );
}

export default Main;
