import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="h-full w-full bg-yellow-500 text-center">
      <h3 className="text-base">
        Do you feel stuck in a rut with that project of yours?
      </h3>
      <p className="text-xl">Artistaid is here to help.</p>
      <p className="text-lg">What do you need?</p>
      <NavLink to="/words">
        <button className="bg-slate-800 text-yellow-500 rounded-full p-2 m-4">
          Words
        </button>
      </NavLink>
      <NavLink to="/emojis">
        <button className="bg-slate-800 text-yellow-500 rounded-full p-2 m-4">
          Emojis
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
