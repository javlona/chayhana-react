import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="p-4">Home</h1>
      <Link to="/menu">Open menu</Link>
    </div>
  );
}

export default Home;
