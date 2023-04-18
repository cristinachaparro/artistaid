import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Artistaid</h1>
      <h3>Do you feel stuck in a rut with that project of yours?</h3>
      <h4>Artistaid is here to help.</h4>
      <h5>What do you need?</h5>
      <NavLink to="/words">
        <button>Words</button>
      </NavLink>
      <NavLink to="/emojis">
        <button>Emojis</button>
      </NavLink>
    </div>
  );
}

export default Home;
