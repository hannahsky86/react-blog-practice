import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import ContactMe from "../pages/contact-me";
import Header from "./header"

const Navigation = ({drawerOpen, setDrawerOpen}) => {
    return (
        // drawerOpen && 
    <div>
        {/*<Header/>*/}
        <BrowserRouter>
            <div id="nav-links">
                <ul>
                    <li>
                        <Link to="/" onClick={() => setDrawerOpen(!drawerOpen)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setDrawerOpen(!drawerOpen)}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact-me" onClick={() => setDrawerOpen(!drawerOpen)}>Contact Me</Link>
                    </li>
                </ul>
            </div>
            {/*<div className="sidebar">*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Home />} />*/}
            {/*        <Route path="/blog" element={<Blog />} />*/}
            {/*        /!*<Route path="/" element={<Topics />} />*!/*/}
            {/*        /!*<Route path="/" element={<Youtube />} />*!/*/}
            {/*        /!*<Route path="/" element={<Portfolio />} />*!/*/}
            {/*        <Route path="/contact-me" element={<ContactMe />} />*/}
            {/*    </Routes>*/}
            {/*</div>*/}
        </BrowserRouter>
    </div>
    );
}

export default Navigation;