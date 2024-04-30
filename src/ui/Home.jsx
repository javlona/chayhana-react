import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-center text-xl font-semibold md:text-3xl">
        Authentic cuisine of central Asia
      </h1>
      {/* <Link to="/menu">Open menu</Link> */}

      {username === "Guest" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Start your order
        </Button>
      )}
    </div>
  );
}

export default Home;
