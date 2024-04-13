import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const res = await fetch(
    "https://react-fast-pizza-api.onrender.com/api/menuss"
  );

  if (!res.ok) throw Error("Could not fetch menu");
  const { data } = await res.json();
  return data;
}

export default Menu;
