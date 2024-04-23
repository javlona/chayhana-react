import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiFetch";
import Button from "../../ui/Button";

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

const isValidPhone = (phone) => {
  return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    phone,
  );
};

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  const cart = JSON.stringify(dummyCart);

  return (
    <div className="my-10">
      <h2>Are you ready to order?</h2>

      <Form method="post">
        <div className="flex flex-col">
          <label htmlFor="name">First name</label>
          <input
            className="input"
            type="text"
            id="name"
            name="customer"
            required
          />

          <label htmlFor="phone">Phone number</label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            required
          />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
          <div>
            <input type="hidden" name="cart" value={cart} />
            <Button disabled={isSubmitting}>
              {isSubmitting ? "Ordering..." : "Order now"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Phone number is not valid";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
  // return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
