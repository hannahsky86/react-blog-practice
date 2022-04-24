import {Link} from "react-router-dom";



const Navigation = ({menuOpen, setMenuOpen, isMobile}) => {
    const MOBILE_WIN = 900;
    const navOpen = window.innerWidth >= MOBILE_WIN;
    
    return (
        <header>
            <div id="nav-links" className="navigation">
            { (!isMobile || menuOpen) &&
                <ul>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(navOpen)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setMenuOpen(navOpen)}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact-me" onClick={() => setMenuOpen(navOpen)}>Contact Me</Link>
                    </li>
                </ul> 
            }  
            </div>      
        </header>
    );
}

export default Navigation;