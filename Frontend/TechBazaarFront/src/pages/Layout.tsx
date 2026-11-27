import { NavLink, Outlet } from "react-router"

function Layout() {
  return (
    <>
    <header>
        <h1>Tech Bazaar</h1>
      </header>
      <nav>
          <NavLink to="/" end>Public</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/uj-termek">Új Termék</NavLink>
        </nav>  
        <main>
            <Outlet/>
          </main>          
    </>
  )
}

export default Layout