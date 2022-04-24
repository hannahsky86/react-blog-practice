import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import ContactMe from "../pages/contact-me";


export default () => {
    return(
        <div className="routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                {/*<Route path="/" element={<Topics />} />*/}
                {/*<Route path="/" element={<Youtube />} />*/}
                {/*<Route path="/" element={<Portfolio />} />*/}
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>            
        </div>
    );
}