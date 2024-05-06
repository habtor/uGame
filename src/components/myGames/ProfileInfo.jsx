// import { games } from "../../data/gamesArray";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ProfileInfo() {
  return (
    <div>
      <div>
        <div
          className="bg-cover bg-center w-full relative"
          style={{
            backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2023/08/06/City-Game-Background-Graphics-76306262-1.jpg")`,
          }}
        >
          <div className="bg-gradient-to-r from-black w-full h-full flex flex-col sm:flex-row items-center justify-center sm:justify-around pt-16 pb-10 ">
            <div className="flex items-center">
              <div
                className="h-20 w-20 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-vector/ninja-logo-template-gradient_23-2148999701.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=ais")`,
                }}
              ></div>
              <div className="flex flex-col ml-2">
                <span>Saleh</span>
                <p>@sashab</p>
              </div>
            </div>
            <div className="flex mt-2 text-4xl bg-blsack rounded-lg bg-opsacity-55">
              <FaDiscord className="p-2 m-2 rounded-lg bg-[#5A6FB2] " />
              <FaXTwitter className="p-2 m-2 rounded-lg bg-black " />
              <FaTwitch className="p-2 m-2 rounded-lg bg-[#5B48BA] " />
              <FaInstagram className="p-2 m-2 rounded-lg bg-[#B43B75] " />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between w-full items-center bg-main backdrop-blur-sm px-5 py-4 ">
            <div className="flex w-full justify-between sm:justify-normal">
              <div className="flex flex-col items-center">
                <span>45</span>
                <span>games</span>
              </div>
              <div className="flex sm:ml-10 flex-col items-center">
                <span>24</span>
                <span>followers</span>
              </div>
              <div className="flex sm:ml-10 flex-col items-center">
                <span>18</span>
                <span>following</span>
              </div>
            </div>
            <div className="flex w-full justify-center sm:justify-end mt-4 sm:mt-0">
              <p className="max-w-80 text-center ">
                Grandmaster at COD MW3, always looking for somone to teamup
                with, if you like my posts follow me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
