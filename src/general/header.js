import React from "react";
import { BsList } from "react-icons/bs";


export default ({menuOpen, setMenuOpen, isMobile}) => {
    return (
        <header className="header">
           {isMobile &&
                <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} >
                    <BsList/>
                </button>    
            }
            <h1>Hannah's Dev Blog</h1>
            <p>
                Written by <b>Hannah Roach</b> who codes all day
            ...and codes all night
            </p>
        </header>
    )
}