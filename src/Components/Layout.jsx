import Footer from "./Footer"
import Nav from "./Nav"
import Qa from "./QA/Qa"

function Layout({children}) {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main className="bg-gray-100 md:pt-0 pt-[64px]">
        {children}
        <Qa />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
