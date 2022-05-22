import {Link} from "react-router-dom";
import React from "react";

import pages from "../markdown/pages.json"

const Navigation = ({menuOpen, setMenuOpen}) => {
    const navOpen = window.innerWidth >= 1200;
    const isNavOpen = (navOpen || menuOpen) ? "nav-open" :"nav-not-open";
    
    
    
    return (
        <header className={`header ${isNavOpen}`}>
            <div id="nav-links" className="navigation">
                { (navOpen || menuOpen) &&
                <ul>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(navOpen)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setMenuOpen(navOpen)}>BLOG</Link>
                        {
                            pages.posts.map((post) =>
                                <div>
                                    <Link key={post.key} to={`/blog/${post.key}`} onClick={() => setMenuOpen(navOpen)}>{post.name}</Link>
                                </div>
                            )
                        }
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