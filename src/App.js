import './scss/App.scss';
import Navigation from './general/navigation'
import {useEffect, useState} from "react";
import Header from "./general/header";
import {BrowserRouter} from "react-router-dom";
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
}



export default App;
