import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h2>Something went wrong</h2>
      <p>Error status: {error.status}</p>
      <p>Error message: {error.message}</p>
      <LinkButton to="-1">&#8592; Go back</LinkButton>
      {/* <button onClick={() => navigate(-1)}>&#8592;Go back </button> */}
    </div>
  );
}

export default Error;
