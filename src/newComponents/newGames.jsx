import { games } from "../data/gamesArray";

function NewGames() {
  return (
    <div className="grid sm:grid-cols-[1fr,1fr,90px] grid-cols-1 mt-5 sm:mt-20">
      <div
        className="flex relative w-full h-96 sm:h-full justify-between bg-cover bg-center  rounded-tr-lg rounded-bl-lg "
        style={{
          backgroundImage: `url(${games[3].image})`,
        }}
      >
        <div className="sm:hidden sm:mr-12 flex flex-col self-end">
          <h1 className="text">Teen Age Mutant Ninja Turtels</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            exercitationem sed sapiente accusamus, dicta magnam fugit pariatur
            possimus voluptate quam officia autem deserunt libero? Nesciunt,
            maxime doloribus. Illo, perferendis rem!
          </p>
          <div className="text-2xl text-green2">
            <button>Get Started</button>
            <button>Watch</button>
          </div>
          <div className="flex">
            <span className="">$150</span>
            <span className="ml-5">262 players</span>
            <span className="ml-5">start star star star star</span>
          </div>
        </div>
        <div className="absolute hidden sm:block bottom-[40px] right-[-90px]">
          {games[0].screenShots.map((screenShot) => (
            <div
              key={games[0].screenShots.indexOf(screenShot)}
              className="h-16 w-16 bg-cover bg-center rounded-lg m-1"
              style={{
                backgroundImage: `url(${screenShot})`,
              }}
            ></div>
          ))}
          <div className="h-[100px]"></div>
        </div>
      </div>

      <div className="mr-12 hidden sm:block">
        <h1 className="text-[50px]">Teen Age Mutant Ninja Turtels</h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          exercitationem sed sapiente accusamus, dicta magnam fugit pariatur
          possimus voluptate quam officia autem deserunt libero? Nesciunt,
          maxime doloribus. Illo, perferendis rem!
        </p>
        <div className="text-2xl text-green-200">
          <button>Get Started</button>
          <button>Watch</button>
        </div>
        <div className="flex mt-24">
          <span className="">$150</span>
          <span className="ml-5">262 players</span>
          <span className="ml-5">start star star star star</span>
        </div>
      </div>
    </div>
  );
}

export default NewGames;
