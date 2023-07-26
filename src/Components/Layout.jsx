import Footer from "./Footer"
import Nav from "./Nav"

function Layout({children}) {
  return (
    <div>
      {/* Header */}
      <header>
        <Nav />
      </header>

      {/* Konten halaman */}
      <main className="bg-gray-100">
        {children}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
