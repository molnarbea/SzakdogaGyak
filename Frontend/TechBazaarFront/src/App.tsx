import { useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="text-center">Szakdoga Gyakorlat: TechBazaar</header>
        <article>
          <Users />
        </article>
      <footer className="text-center">Készítette: Feri,Bea,Tibi</footer>
    </>
  )
}

export default App
