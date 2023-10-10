import Footer from "./Footer"
import Nav from "./Nav"
import Qa from "./QA/Qa"
import ScrollToTop from "./ScrollToTop"
import CookieAcc from './CookieAcc'

// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <div className="overflow-hidden">
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
