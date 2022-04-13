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
            <header className="header">
                <h1>Hannah's Dev Blog</h1>
                <span>Written by Hannah Roach who codes all day ...and codes all night.</span>
                {/*<span><a href="https://www.linkedin.com/in/hannahsky86/">Follow me on LinkedIn</a></span>*/}
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
