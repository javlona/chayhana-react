import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-700 transition hover"
      >
        &#8592; Back to menu
      </Link>

      <h2>Your cart</h2>

      <div>
        <Link to="/order/new">Order food</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
