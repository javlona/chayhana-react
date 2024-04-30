import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const initialCart = [
  {
    id: 12,
    name: "Palov",
    quantity: 2,
    unitPrice: 14,
    totalPrice: 28,
  },
  {
    id: 6,
    name: "Kebab",
    quantity: 4,
    unitPrice: 8,
    totalPrice: 32,
  },
  {
    id: 11,
    name: "Somsa",
    quantity: 4,
    unitPrice: 5,
    totalPrice: 20,
  },
];
function Cart() {
  const cart = initialCart;
  const username = useSelector((state) => state.user.userName);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&#8592; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order food
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
