
export default ({menuOpen, setMenuOpen, isMobile}) => {
    return (
        <header className="header">
            {isMobile &&
                <button onClick={()=>setMenuOpen(!menuOpen)} >
                    <span>MENU</span>
                    <div className="ico-menu">
                        <div className="bar"/>
                        <div className="bar"/>
                        <div className="bar"/>
                    </div>
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