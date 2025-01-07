import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <nav>Navbar</nav>
    <main className='min-h-screen max-w-screen-2x1 mx-auto px-4 py-6 font-primary ' >
      <Outlet/>
      </main>
    <footer>Footer</footer>
    </>
  )
}

export default App