import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <header>
      {/* left */}
      <div className="flex item-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-centre rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center outline-none bg-transparent placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div>
          <HeaderIcon Icon={HomeIcon} />
        </div>
      </div>

      {/* right */}
    </header>
  );
};

export default Header;
