import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiFetch";

function CreateOrder() {
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
            <input type="hidden" name="cart" value={JSON.stringify([])} />
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
