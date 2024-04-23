function Button({ children, disabled }) {
  const style = `inline-block rounded-md bg-blue-950 px-3 py-2 font-semibold uppercase tracking-wide text-stone-100 transition-colors duration-200 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 disabled:cursor-not-allowed disabled:bg-stone-400 sm:px-6 sm:py-4`;

  return (
    <button className={style} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
