import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="px-4 py-3 bg-orange-500 uppercase border-b-2 border-orange-200 sm:px-6">
      <Link to="/" className="tracking-wide">
        Chayhana
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
