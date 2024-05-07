import { TiStarOutline } from "react-icons/ti";
import { CgGames } from "react-icons/cg";
import { FaEuroSign } from "react-icons/fa";
import { games } from "../../data/gamesArray";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function NewGame() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-lg rounded-t-none"
      >
        <div className="flex overflow-auto">
          {games.map((game) => (
            <SwiperSlide key={game.key}>
              <div
                className="h-96 sm:h-[506px] min-w-full bg-cover bg-center rounded-lg rounded-t-none"
                style={{
                  backgroundImage: `url(${game.image})`,
                }}
              >
                <div className="w-full bg-gradient-to-t sm:bg-gradient-to-r from-main from-0% via-transparent ms:via-50% via-70% h-full ">
                  <div className="flex flex-col p-6 justify-end h-full items-center sm:items-start ">
                    <h1 className="text-4xl text-green2 sm:mb-10 text-center sm:text-left">
                      {game.name}
                    </h1>
                    <div className="sm:w-1/3 sm:h-fit rounded-lg sm:mb-10">
                      <span className="text-xl hidden sm:flex">
                        {game.description} <br />
                      </span>
                      <button className="animate-gradient-x bg-gradient-to-r from-green-900 to-green2 rounded-lg px-10 mt-2 ">
                        Buy Now
                      </button>
                    </div>

                    <div className="mt-2 relative w-full flex justify-center sm:justify-start">
                      <div className="flex ">
                        <span className=" flex items-center mr-5">
                          <TiStarOutline className="text-yellow-500 text-2xl mr-1" />
                          <span>{game.rating}</span>
                        </span>
                        <span className=" flex items-center mr-5">
                          <FaEuroSign className="text-green-500 text-lg mr-1" />
                          <span>{game.price}</span>
                        </span>
                        <span className=" flex items-center mr-5">
                          <CgGames className="text-slate-300 text-2xl mr-1" />
                          <span>{game.players}</span>
                        </span>
                      </div>
                      <div className="hidden sm:flex absolute bottom-0 right-16 overflow-auto bg-slate-700 md:h-42 md:w-80  sm:w-48 sm:h-24 bg-opacity-40 p1 rounded-lg backdrop-blur-md">
                        {game.screenShots.map((screenShot) => (
                          <div
                            key={game.screenShots.indexOf(screenShot)}
                            className="md:h-22 md:w-28 sm:w-48 sm:h-20 bg-cover bg-center overflow-hidden rounded-lg cursor-pointer m-2 min"
                            style={{
                              backgroundImage: `url(${screenShot})`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

export default NewGame;