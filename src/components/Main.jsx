import Feed from "./home/Feed";
import HotGames from "./home/HotGame";
import useNavBarFilter from "../hooks/NavBarFliter";
// import Games from "./home/Games";
import MyGames from "./myGames/MyGames";

function Main() {
  const { filter } = useNavBarFilter();
  console.log(filter);
  return (
    <div className="mt-14 mx-3">
      {filter === "Feed" ? (
        <>
          <HotGames />
          <Feed />
        </>
      ) : filter === "MyGames" ? (
        <>
          {/* <Games /> */}
          <MyGames />
        </>
      ) : null}
    </div>
  );
}

export default Main;
