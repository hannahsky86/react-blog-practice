import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contact-me">Contact Me</Link>
            </li>
        </div>
    );
}

export default Navigation;