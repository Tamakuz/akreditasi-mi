import Footer from "./Footer"
import Nav from "./Nav"

function Layout({children}) {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main className="bg-gray-100">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
