import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

function Header({menuOpen , setmenuOpen}) {
    return (
        <>
        <nav>
        <NavContent setmenuOpen={setmenuOpen}/>
        </nav>
        <button className="navBtn" onClick={()=>setmenuOpen(!menuOpen)}>
        <AiOutlineMenu />
        </button>
        </>
    )
};



export function Headerphone({menuOpen , setmenuOpen}) {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setmenuOpen={setmenuOpen}/>
        </div>
    )
}
export const NavContent = ({setmenuOpen}) =>(
    <>
    <h2>Om prakash.</h2>
    <div>
        <a href="#home" onClick={()=>setmenuOpen(false)}>Home</a>
        <a href="#work" onClick={()=>setmenuOpen(false)}>work</a>
        <a href="#timeline" onClick={()=>setmenuOpen(false)}>Experience</a>
        <a href="#services" onClick={()=>setmenuOpen(false)}>Services</a>
        <a href="#testimonial" onClick={()=>setmenuOpen(false)}>Testimonial</a>
        <a href="#contact" onClick={()=>setmenuOpen(false)}>Contacts</a>
    </div>
    <a href="mailto:omprakash@gmail.com">
        <button>Email</button>
    </a>
    </>
);

export default Header
