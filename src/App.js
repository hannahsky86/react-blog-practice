import './scss/App.scss';
import Navigation from './general/navigation'
import {useEffect, useState} from "react";
import Header from "./general/header";
import {BuildRoutes} from "./general/build-routes";
import * as Constants from "./general/constants";
import {MOBILE_WIN} from "./general/constants";


function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth<=Constants.MOBILE_WIN)
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth<=MOBILE_WIN);
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
                  <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <BuildRoutes />
              </div>
          </div>
      </div>
);
}



export default App;
