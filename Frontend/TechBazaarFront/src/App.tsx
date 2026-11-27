import { createHashRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './pages/Layout'
import Public from './pages/Public'
import Admin from './pages/Admin'
import UjTermek from './pages/UjTermek'
import NoPage from './pages/NoPage'


const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Public/>},
      {path: "admin", element: <Admin/>},
      {path: "uj-termek", element: <UjTermek/>},
      {path: "*", element: <NoPage/>},
    ]
  }
])

function App() {

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
