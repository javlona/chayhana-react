import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiFetch";

const dummyCart = [
  {
    id: 11,
    name: "Palov",
    quantity: 1,
    price: 9.99,
    total: 9.99,
  },
  {
    id: 12,
    name: "Samsa",
    quantity: 4,
    price: 4.99,
    total: 19.96,
  },
  {
    id: 13,
    name: "Kebab",
    quantity: 2,
    price: 14.99,
    total: 29.98,
  },
];

function CreateOrder() {
  const cart = JSON.stringify(dummyCart);

  return (
    <div>
      <h2>Are you ready to order?</h2>

      <Form method="post">
        <div>
          <label htmlFor="name">First name</label>
          <input type="text" id="name" name="customer" required />

          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone" name="phone" required />
          <div>
            <input type="hidden" name="cart" value={cart} />
            <button>Order</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };

  const newOrder = await createOrder(order);
  console.log(newOrder);
  return redirect(`/order/${newOrder.id}`);
  // return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
