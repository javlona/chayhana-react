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
    <div className="px-4 py-6">
      <h2 className="mb-6 text-xl font-bold">Are you ready to order?</h2>

      <Form method="post" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            className="font-semibold tracking-wide sm:basis-40"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            className="input grow"
            type="text"
            id="name"
            name="customer"
            required
          />
        </div>
        <div className="relative flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            className="font-semibold tracking-wide sm:basis-40"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="input  grow"
            type="tel"
            id="phone"
            name="phone"
            required
          />
          {formErrors?.phone && (
            <p className="absolute right-2 top-9 rounded-md bg-red-100 p-1 text-sm text-red-700 sm:top-2">
              {formErrors.phone}
            </p>
          )}
        </div>
        <div className="mt-8">
          <input type="hidden" name="cart" value={cart} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Ordering..." : "Order now"}
          </Button>
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
