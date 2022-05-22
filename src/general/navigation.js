import {Link} from "react-router-dom";
import React from "react";

import pages from "../markdown/pages.json"

const Navigation = ({menuOpen, setMenuOpen}) => {
    const navOpen = window.innerWidth >= 1200;
    const isNavOpen = (navOpen || menuOpen) ? "nav-open" :"nav-not-open";
    
    let tag_dict = {}
    
    pages.posts.forEach((post) => {
        post.tags.forEach((item) => {
            if(tag_dict[item]===undefined) {
                tag_dict[item] = []
            }
            tag_dict[item].push(post);
        })
    })

    
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
                    </li>                   
                    <li>
                    {
                        Object.entries(tag_dict).map((item) =>
                        <div>
                            <h5>{item[0]}</h5>
                            {
                                item[1].map((v) => 
                                    <div>
                                        <Link key={v.key} to={`/blog/${v.key}`}
                                              onClick={() => setMenuOpen(navOpen)}>{v.name}</Link>    
                                    </div>
                                )
                            }    
                        </div>                             
                        )
                    }
                    {/*{*/}
                    {/*    for(const [key, value] of Object.entries(tag_dict)) {*/}
                    {/*    <h5>{key}</h5>*/}
                    {/*        for(const v in values) {*/}
                    {/*            <Link key={value.key} to={`/blog/${value.key}`} onClick={() => setMenuOpen(navOpen)}>{value.name}</Link>*/}
                    {/*        }*/}
                    {/*    }*/}
                    {/*}*/}
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