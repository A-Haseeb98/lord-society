import './style/index.css'
import LOGO from '../../assets/images/logo.png'
import { BsDiscord } from 'react-icons/bs'
import { FaTwitterSquare, FaAlignRight, FaInstagram, FaAlignJustify } from 'react-icons/fa'
import { useState } from 'react';

function Navbar() {

    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }

    return (
        <>
            <div className="navbar_container">
                <div className="logo_container">
                    <img src={LOGO} alt='logo' />
                </div>
                <div>
                    <ul className="menu_section">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Roadmap</li>
                        <li>Our Artist</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="icons_container">
                    <span><FaInstagram /></span>
                    <span><FaTwitterSquare /></span>
                    <span><BsDiscord /></span>
                </div>
            </div>
            {/* Mobile View */}
            <div className="navbar_container_mobile">
                <div className='header_wrapper'>
                    <div className="logo_container_mobile">
                        <img src={LOGO} alt='logo' />
                    </div>

                    <div className="icons_container_mobile">
                        <span><FaInstagram /></span>
                        <span><FaTwitterSquare /></span>
                        <span><BsDiscord /></span>
                    </div>
                    <div className='toggle_button'>
                        <button onClick={() => handleClick(toggle)} className='navbar_btn_mobile'>
                            {toggle ? <FaAlignRight /> : <FaAlignJustify />}</button>
                    </div>
                </div>

                {toggle ?
                        <ul className="menu_section_mobile">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Roadmap</li>
                            <li>Our Artist</li>
                            <li>FAQ</li>
                        </ul>
                    : null
                }
            </div>
        </>
    )
}
export default Navbar;