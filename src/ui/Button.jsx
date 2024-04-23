import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const style = `inline-block rounded-full bg-secondary px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-stone-400 sm:px-6 sm:py-4`;

  if (to) {
    return (
      <Link to={to} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
