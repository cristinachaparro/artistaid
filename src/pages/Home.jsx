import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-full bg-yellow-500 text-center">
      <h3 className="text-base p-6">
        Do you feel stuck in a rut with that project of yours?
      </h3>
      <h1 className="title-2 text-3xl">Artistaid</h1>
      <p className="text-xl pb-4">is here to help.</p>
      <p className="text-lg">What do you need?</p>
      <NavLink to="/words">
        <button className="default-btn text-3xl bg-slate-800 text-yellow-500 rounded-full p-4 m-4">
          Words
        </button>
      </NavLink>
      <NavLink to="/emojis">
        <button className="default-btn text-3xl bg-slate-800 text-yellow-500 rounded-full p-4 m-4">
          Emojis
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
