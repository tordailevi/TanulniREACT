import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" >
            Összes Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ujquiz" >
            Új kérdés
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/toplista" >
            Toplista
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default Navigation;