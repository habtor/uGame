import { FaGamepad } from "react-icons/fa";

function LogoAndProfile() {
  return (
    <div className="grid grid-cols-3  items-center m-3">
      <FaGamepad className="text-green text-4xl ml-4 " />
      <div className="flex justify-center headingColor">
        <span className="text-lg">My Feed</span>
      </div>
      <div className="flex justify-end">
        <div
          className="bg-cover bg-center w-9 h-9 rounded-full mr-4 border-green border-2"
          style={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/006/988/698/small/man-headphones-mascot-logo-gaming-illustration-vector.jpg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default LogoAndProfile;
