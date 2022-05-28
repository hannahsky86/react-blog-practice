import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import pages from "../markdown/pages.json";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import {MOBILE_WIN} from "./constants";

const Navigation = ({menuOpen, setMenuOpen}) => {
    const [headerOpen, setHeaderOpen] = useState({item: "", state: false})
    const navOpen = window.innerWidth >= MOBILE_WIN;
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
                    <li className="category">
                        <Link className="category" to="/" onClick={() => setMenuOpen(navOpen)}>HOME</Link>
                    </li>
                    <li className="category">
                        <Link to="#"  onClick={() => {setHeaderOpen({item: "BLOG", state: !headerOpen.state})}}>BLOG</Link>
                    </li>
                    {
                        (headerOpen.state && headerOpen.item === "BLOG")?  
                        <BlogTagsDropdown tag_dict={tag_dict} setMenuOpen={setMenuOpen} navOpen={navOpen} />:<></>
                    }
                    <li className="category">
                        <Link to="/contact-me" onClick={() => setMenuOpen(navOpen)}>CONTACT ME</Link>
                    </li>
                </ul> 
            }  
            </div>      
        </header>
    );
}

function BlogTagsDropdown ({tag_dict, setMenuOpen, navOpen}) {
    const [dropdownOpen, setDropdownOpen] = useState({item: "", state: false})
    const [dropdownsOpen, setDropdownsOpen] = useState([])
    const isTagOpen = (item) => dropdownsOpen?.some((menu) => menu.state && menu.item === item[0])
    
    useEffect(() => {
        const newMenuArray = [...dropdownsOpen, dropdownOpen]
        const prevMenuArray = newMenuArray.slice(0, newMenuArray.length - 1);
        setDropdownsOpen((prevMenuArray?.some((dataset) => dataset.item === dropdownOpen.item)) ?
            prevMenuArray.map((item) => (item.item === dropdownOpen.item) ? dropdownOpen : item) : newMenuArray)
    }, [dropdownOpen])
    
    return (
            Object.entries(tag_dict).map((item) =>
            <li className="tags" key={`dropdown-tag-${item}`}>
                <Link to="#" onClick={() => {setDropdownOpen({item: item[0], state: !isTagOpen(item)})}}>
                    {isTagOpen(item) ? <AiFillCaretDown/> :<AiFillCaretRight/>}
                    {item[0]}
                </Link>
                { isTagOpen(item) && item[1].map((v) =>
                    <li className="blog-post" key={`tag-list-${v.key}`}>
                        <Link to={`/blog/${v.key}`} onClick={() => setMenuOpen(navOpen)}>
                            {v.name}
                        </Link>
                    </li>
                )}
            </li>
            )
    )
}

export default Navigation;