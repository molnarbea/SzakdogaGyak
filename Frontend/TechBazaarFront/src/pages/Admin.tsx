import { Link } from "react-router"

function Admin() {
  return (
    <section>
        <h2>Admin oldal</h2>
        <Link to="/uj-termek">Új Termék Felvétele</Link>
    </section>
  )
}

export default Admin