// import { games } from "../../data/gamesArray";

function ProfileInfo() {
  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center sm:h-40 h-32 w-full relative flex items-end justify-center rounded-t-xl"
          style={{
            backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2023/08/06/City-Game-Background-Graphics-76306262-1.jpg")`,
          }}
        >
          <div
            className="h-16 w-16 absolute bottom-[-20px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url("https://img.freepik.com/free-vector/ninja-logo-template-gradient_23-2148999701.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=ais")`,
            }}
          ></div>
        </div>

        <div className="flex flex-col justify-center items-center bg-slate-800 px-5 py-8 rounded-2xl rounded-t-3xl">
          <div className="flex flex-col items-center">
            <span>Saleh</span>
            <p>@sashab</p>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-center">
              <span>12</span>
              <span>followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span>12</span>
              <span>followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span>12</span>
              <span>followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
