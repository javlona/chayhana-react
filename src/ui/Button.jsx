import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary" }) {
  const base = `inline-block text-sm rounded-full bg-secondary  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-stone-400 `;

  const styles = {
    primary: `${base} px-3 py-2 md:px-5 md:py-3`,
    small: `${base} px-2 py-1 md:px-4 md:py-2 text-xs`,
    secondary: `inline-block text-sm border-stone-200 rounded-full border-2   font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-200 hover:bg-stone-300 hover:text-stone-700 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 px-2.5 py-1.5 md:px-4 md:py-2.5`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
