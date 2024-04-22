import { SlFeed } from "react-icons/sl";
import useNavBarFilter from "../hooks/NavBarFliter";

function NavHeading() {
  const { filter } = useNavBarFilter();
  return (
    <div className="flex items-center pl-3 bg-darkColor py-2">
      <SlFeed className="text-green text-2xl mr-2" />
      <span>Feed</span>
    </div>
  );
}

export default NavHeading;
