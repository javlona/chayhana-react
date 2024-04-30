import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.userName);

  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}

export default Username;
