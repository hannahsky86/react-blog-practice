import './scss/App.scss';
import Navigation from './general/navigation'
import {useEffect, useState} from "react";
import Header from "./general/header";
import {BuildRoutes} from "./general/build-routes";
import * as Constants from "./general/constants";
import MarkDown from "markdown-to-jsx";

function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth<=Constants.MOBILE_WIN)
    
    // const file_name = 'Test1.md';
    // const [post, setPost] = useState('');
    //
    // useEffect(() => {
    //     import(`./markdown/${file_name}`)
    //         .then(res => {
    //             fetch(res.default)
    //                 .then(res => res.text())
    //                 .then(res => setPost(res));
    //         }).catch(err => console.log(err))
    // })
    
    
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
                  <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobile={isMobile}/>
                  <BuildRoutes />
              </div>
          </div>
      </div>
);
}



export default App;
