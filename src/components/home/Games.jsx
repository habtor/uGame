import Category from "../home/Categories";
import HotGames from "./HotGame";
import NewGame from "./NewGame";

function Games() {
  return (
    <>
      <NewGame />
      <HotGames />
      <Category />
    </>
  );
}

export default Games;
