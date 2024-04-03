import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
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
