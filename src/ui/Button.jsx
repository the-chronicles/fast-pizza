/* eslint-disable */

import { Link } from "react-router-dom";
import "./button.css";


function Button({ children, disabled, to, type }) {
  const base =
    // "inline-block rounded-full bg-orange-400 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed focus:ring-animate gradient-ring";
    "inline-block rounded-full bg-orange-400 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-4 focus:ring-offset-black disabled:cursor-not-allowed focus:ring-animate";
    // "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " py-2 md:px-5 md:py-2.5 px-4 text-xs",
  };

  const gradientRing = 'focus:ring-gradient-to-r from-orange-400 via-red-500 to-yellow-600 focus:ring-offset-4 focus:ring-animate'

  

  if (to)
    return (
      <Link to={to} className={`${styles[type]} ${gradientRing}`}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={`${styles[type]} ${gradientRing}`}>
      {children} 
    </button>
  );
}

export default Button;
