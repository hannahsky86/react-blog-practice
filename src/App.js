import './scss/App.scss';
import Navigation from './general/navigation'
import {useEffect, useState} from "react";
import Header from "./general/header";
import {BrowserRouter} from "react-router-dom";
// import Home from "./pages/home";
// import Blog from "./pages/blog";
// import ContactMe from "./pages/contact-me";
import BuildRoutes from "./general/build-routes";
import * as Constants from "./general/constants";



function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth<=Constants.MOBILE_WIN)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth<=Constants.MOBILE_WIN);
        window.addEventListener('resize', handleResize);

        (isMobile >= Constants.MOBILE_WIN) ? setMenuOpen(true): setMenuOpen(false);

        return () => window.removeEventListener('resize', handleResize)
    }, [window])
    
  return (
      <div className="App">
          <div className="flex-container">
              <div className="header">
                  <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobile={isMobile}/>
              </div>
              <div className="body">
                  <BrowserRouter>
                      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobile={isMobile}/>
                      <BuildRoutes/>                      
                  </BrowserRouter>

              </div>
          </div>
      </div>
);
      
    // <div className="App">
    
    {/*    <div className="mobile-nav-button">*/}
    {/*    {!isDesktop && */}
    {/*        <button id="menu-button" onClick={() => setDrawerOpen(!drawerOpen)}>*/}
    {/*            <nav className="main-nav overlay clearfix">*/}
    {/*                <a className="menu-button icon-menu" href="#">*/}
    {/*                    <span className="word">Menu</span>*/}
    {/*                </a>*/}
    {/*            </nav>*/}
    {/*        </button>*/}
    {/*    }*/}
    {/*    </div>*/}
    {/*    { drawerOpen && !isDesktop &&*/}
    {/*        <div className="dropdown-nav">*/}
    {/*            <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>*/}
    {/*        </div>*/}
    {/*    }*/}
    {/*    */}
    {/*    */}
    {/*    /!*<Header/>*!/*/}
    {/*    <div className="desktop-nav">*/}
    {/*        /!*{isDesktop && *!/*/}
    {/*        <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>*/}
    {/*        /!*}*!/*/}
    {/*        <div className="routes">*/}
    {/*            <BrowserRouter>*/}
    {/*                <Routes>*/}
    {/*                    <Route path="/" element={<Home />} />*/}
    {/*                    <Route path="/blog" element={<Blog />} />*/}
    {/*                    /!*<Route path="/" element={<Topics />} />*!/*/}
    {/*                    /!*<Route path="/" element={<Youtube />} />*!/*/}
    {/*                    /!*<Route path="/" element={<Portfolio />} />*!/*/}
    {/*                    <Route path="/contact-me" element={<ContactMe />} />*/}
    {/*                </Routes>*/}
    {/*            </BrowserRouter>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}
  // );
}



export default App;
