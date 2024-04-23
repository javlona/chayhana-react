import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function Cart() {
  return (
    <div>
      <LinkButton to="/menu">&#8592; Back to menu</LinkButton>

      <h2>Your cart</h2>

      <div>
        <Button to="/order/new">Order food</Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
