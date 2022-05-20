import {Link} from "react-router-dom";
import React from "react";


const Navigation = ({menuOpen, setMenuOpen, isMobile}) => {
    const MOBILE_WIN = 900;
    const navOpen = window.innerWidth >= MOBILE_WIN;
    const isNavOpen = (navOpen || menuOpen) ? "nav-open" :"nav-not-open";
    
    return (
        <header className={`header ${isNavOpen}`}>
            <div id="nav-links" className="navigation">
                { (navOpen || menuOpen) &&
                <ul>
                    <img className="profile-image"
                         src={require('../images/profile.jpg')} alt="hanzo"/>

                    <li>
                        <Link to="/" onClick={() => setMenuOpen(navOpen)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setMenuOpen(navOpen)}>BLOG</Link>
                    </li>
                    <li>
                        <Link to="/contact-me" onClick={() => setMenuOpen(navOpen)}>CONTACT ME</Link>
                    </li>
                </ul> 
            }  
            </div>      
        </header>
    );
}

export default Navigation;