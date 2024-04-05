import { useLoaderData } from "react-router-dom";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return <div>Menu</div>;
}

export async function loader() {
  const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");

  if (!res.ok) throw Error("Could not fetch menu");
  const { data } = await res.json();
  return data;
}

export default Menu;
