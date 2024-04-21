import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold">
        Authentic cuisine of central Asia
      </h1>
      <Link to="/menu">Open menu</Link>
    </div>
  );
}

export default Home;
