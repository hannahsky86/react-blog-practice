import './scss/App.scss';
import Navigation from './general/navigation'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import ContactMe from "./pages/contact-me";

function App() {
  return (
    <div className="App">
        <div className="container-1">
            {/*<button>Button</button>*/}
            
            <div>
                <nav className="main-nav overlay clearfix">
                    {/*<a className="blog-logo" */}
                    {/*   href="https://blog.pragmaticengineer.com"><img*/}
                    {/*    // src="https://blog.pragmaticengineer.com/content/images/2015/12/pragmatic-engineer-profile-image.png"*/}
                    {/*    alt="Hannah's Dev Blog"/>*/}
                    {/*</a>*/}
                    <a className="menu-button icon-menu" href="#"><span className="word">Menu</span></a>
                </nav>
            </div>
            
            
            <header className="header">
                <h1>Hannah's Dev Blog</h1>
                <h2>Written by Hannah Roach who codes all day</h2>
                <h2>...and codes all night</h2>
            </header>
        </div>
        <div className="flex-container-2">
            <BrowserRouter>
                <div className="body">
                    <Navigation/>   
                </div>
                <div className="sidebar">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        {/*<Route path="/" element={<Topics />} />*/}
                        {/*<Route path="/" element={<Youtube />} />*/}
                        {/*<Route path="/" element={<Portfolio />} />*/}
                        <Route path="/contact-me" element={<ContactMe />} />
                    </Routes>
                </div>
            </BrowserRouter>
            {/*<div className="body">Body</div>*/}
        </div>
    </div>
  );
}

export default App;
