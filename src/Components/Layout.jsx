import Footer from "./Footer"
import Nav from "./Nav"
import Qa from "./QA/Qa"
import ScrollToTop from "./ScrollToTop"
import CookieAcc from './CookieAcc'

function Layout({children}) {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main className="bg-gray-100 md:pt-0 pt-[64px]">
        {children}
        <ScrollToTop />
        <Qa />
        <CookieAcc />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout
