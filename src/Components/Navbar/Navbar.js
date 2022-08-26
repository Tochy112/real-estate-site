import {React, useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import Btn from "../Button/Button";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className='parent'>
        <div className='navbar_div'>

            <nav>
                <Link to="/" className='nav-logo'>Tochy</Link>

                <ul className={isExpanded ? "navbar" : "navbar-active"}

                    onClick={() => setIsExpanded(true)}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Rent</Link>
                    </li>
                    <li>
                        <Link to="/">Land</Link>
                    </li>
                    <li>
                        <Link to="/">Agent</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                    
                </ul>
                <Link to="/" className='get_started'>
                    <Btn content="Get Started" />
                </Link>

                {/* Mobile menu */}
                <div className={isExpanded ? "menu-icon" : "menu-icon-active"}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
  
        </div>
    </div>
  )
}

export default Navbar