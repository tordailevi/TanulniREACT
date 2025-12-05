import { Outlet } from "react-router";
import Navigation from "./Navigation";

function Layout() {
  return (
    <main className="container">
      <header>
        <Navigation />
      </header>

      <article className="">
        <Outlet />
      </article>

      <footer >
        <p>Készítette: Tordai Levente</p>
      </footer>
    </main>
  );
}

export default Layout;