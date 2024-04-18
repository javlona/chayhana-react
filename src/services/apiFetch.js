const BASE_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);

  if (!res.ok) throw Error("Could not fetch menu");
  const { data } = await res.json();
  return data;
}

export async function getOrder(orderId) {
  const res = await fetch(`${BASE_URL}/order/${orderId}`);

  if (!res.ok) throw Error(`Could not fetch order #${orderId}`);
  const { data } = await res.json();
  return data;
}

export async function createOrder(order) {
  const res = await fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!res.ok) throw Error("Could not create order");
  const { data } = await res.json();
  return data;
}

export async function updateOrder(orderId, order) {
  try {
    const res = await fetch(`${BASE_URL}/order/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!res.ok) throw Error();
  } catch {
    throw Error("Could not update order");
  }
}
