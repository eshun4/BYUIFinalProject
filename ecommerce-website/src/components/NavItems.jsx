import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // addevent listener
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true);
        } else{
            setHeaderFixed(false);  
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed? "header-fixed fadeInUp" : ""}`}>
        {/* header top start */}
        <div className={`header-top d=md-none ${socialToggle ? "open" : ""}`}>
            <div className="container"> 
            <div className="header-top-area"> 
                <Link to="/signup" className="lab-btn me-2"><span> Create Account</span></Link>
            </div>
        </div>
        </div>
    </header>
  )
}

export default NavItems;