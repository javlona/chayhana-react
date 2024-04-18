import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiFetch";

// const order = {
//   id: 1,
//   customer: "Akram",
//   phone: "0123456789",
//   address: "123 Main Street",
//   items: [
//     { id: 1, name: "Item 1", quantity: 2, price: 9.99 },
//     { id: 2, name: "Item 2", quantity: 1, price: 19.99 },
//   ],
//   total: 29.98,
//   date: "2022-01-01",
// };

function Order() {
  const order = useLoaderData();

  console.log(order);

  return (
    <div>
      <h1>Order</h1>
      <p>Order ID: {order.id}</p>
      <p>Customer: {order.customer}</p>
      <p>Phone: {order.phone}</p>

      <div>
        <p>Palov </p>
        <p>Quantity: {order.items[0].quantity}</p>
        <p>Price: {order.items[0].price}</p>
        <p>Pay on pickup</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return { order };
}

export default Order;
