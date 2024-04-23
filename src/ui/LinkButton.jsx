import { Link, useNavigate } from "react-router-dom";

function LinkButton({ to, children }) {
  const style = `text-sm text-blue-500 hover:text-blue-700 transition-all hover:underline`;
  const navigate = useNavigate();

  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={style}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
}

export default LinkButton;
