import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="pattern flex items-center justify-between border-b-2 border-blue-200 bg-main1 px-4 py-3 uppercase text-stone-100 sm:px-6">
      <Link to="/" className="font-bold tracking-wide">
        Chayhana
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
