import './scss/App.scss';
import Navigation from './general/navigation'
import {useEffect, useState} from "react";
import Header from "./general/header";



function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth>850);
    
    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth>850)
        }

        window.addEventListener('resize', handleResize)
    })
    
    const windowOpen = (drawerOpen && !isDesktop) ? "open" : "closed";
    
  return (
    <div className="App">

        <div className="mobile-nav-button">
        {!isDesktop && 
            <button id="menu-button" onClick={() => setDrawerOpen(!drawerOpen)}>
                <nav className="main-nav overlay clearfix">
                    <a className="menu-button icon-menu" href="#">
                        <span className="word">Menu</span>
                    </a>
                </nav>
            </button>
        }
        </div>
        { drawerOpen && !isDesktop &&
            <div className="dropdown-nav">
                <Navigation drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
            </div>
        }
        
        
        <Header/>
        <div className="desktop-nav">
            {isDesktop && <Navigation/>}
        </div>

    </div>
  );
}



export default App;
