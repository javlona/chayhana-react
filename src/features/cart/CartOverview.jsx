import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-stone-800 text-stone-200 text-sm  uppercase sm:px-6 md:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>palov 2x</span>
        <span>$14.99</span>
      </p>
      <Link to="/cart" href="#">
        Open cart &#8594;
      </Link>
    </div>
  );
}

export default CartOverview;
