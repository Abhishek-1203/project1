import { useEffect, useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './navbar.css';
import menu_icon from '../../assets/menu-icon.png';
export default function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    function togglemenu(){
        console.log("clicked");
        sidebar? setSidebar(false) : setSidebar(true);
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false)
        })
    }, [])
    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <h3>SLN Computers</h3>
                <ul className={sidebar?'hidemobilemenu':''}>
                    <li><Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='programs' offset={-250} smooth={true} duration={500}>Programs</Link></li>
                    <li><Link to='aboutUs' offset={-310} smooth={true} duration={500}>About Us</Link></li>
                    <li><Link to='others' offset={-310} smooth={true} duration={500}>Others</Link></li>
                    <li><Link to='contact' offset={-300} smooth={true} duration={500}><button className='btn'>Contact Us</button></Link></li>
                </ul>
                <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu} />
            </nav>
        </>
    )
}