import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-800 text-yellow-500 text-center p-7">
      <NavLink to="/">
        <h1 className="title text-6xl">Artistaid</h1>
      </NavLink>
    </div>
  );
}

export default Header;
