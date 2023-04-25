import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-base p-6">
        Do you feel stuck in a rut with that project of yours?
      </h3>
      <h1 className="font-rubik text-3xl">Artistaid</h1>
      <p className="text-xl pb-4">is here to help.</p>
      <p className="text-lg">What do you need?</p>
      <div>
        <NavLink to="/words">
          <button className="font-rubik text-3xl bg-slate-800 text-yellow-500 rounded-full m-4 py-4 w-36">
            Words
          </button>
        </NavLink>
        <NavLink to="/emojis">
          <button className="font-rubik text-3xl bg-slate-800 text-yellow-500 rounded-full m-4 py-4 w-36">
            Emojis
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
