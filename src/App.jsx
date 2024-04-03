import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";

function App() {
  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <></>;
}

export default App;
