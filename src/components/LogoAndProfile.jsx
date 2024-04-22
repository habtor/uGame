import { FaGamepad } from "react-icons/fa";
import useNavBarFilter from "../hooks/NavBarFliter";

function LogoAndProfile() {
  const { filter } = useNavBarFilter();

  return (
    <div className="a absolute w-full left-0 flex justify-between items-center  bg-green2 rounded-t-lg">
      <FaGamepad className="text-green text-4xl ml-4 " />
      <div className="flex justify-center headingColor">
        <span className="text-lg">
          {filter == "feed" ? `My ${filter}` : `${filter}`}
        </span>
      </div>
      <div className="flex justify-end">
        <div
          className="bg-cover bg-center w-9 h-9 rounded-full mr-4 m-1"
          style={{
            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqiS-e5Yt-EPvtFU9FTAeQ5fBXp1tHVt0krjGwcbIhazpa7GrAzYY90psT0aDmOQxVE4&usqp=CAU)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default LogoAndProfile;
