import { Form } from "react-router-dom";

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

  console.log("🚀 ~ action ~ order:", order);
  return null;
}

export default CreateOrder;
