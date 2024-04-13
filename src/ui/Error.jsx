import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h2>Something went wrong</h2>
      <p>Error status: {error.status}</p>
      <p>Error message: {error.error.message}</p>
      <button onClick={() => navigate(-1)}>&#8592;Go back </button>
    </div>
  );
}

export default Error;
