import LOGO from '../../assets/images/logo_footer.png'
import { BsDiscord } from 'react-icons/bs'
import { FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import './style/index.css'
import LINE from '../../assets/images/horizontal_line.png'

function Footer() {
    return (
        <div className='footer_container'>

            <div className='first_section'>
                <img className='line_image_1' src={LINE} alt='line' />

                <h1>Become A Lord<br />Join Our Discord</h1>
                <button className='theme-btn'>Join Now </button>
                <img className='line_image_2' src={LINE} alt='line' />
            </div>
            <div className='last_section'>
                <img src={LOGO} alt="footer logo" />
                <p>© 2021 Lord Society - NFT. All rights reserved.</p>
                <div className="footer_icons_container">
                    <span><FaInstagram /></span>
                    <span><FaTwitterSquare /></span>
                    <span><BsDiscord /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;