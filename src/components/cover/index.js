import MEN from '../../assets/images/men.png'
import './style/index.css'
import {FaAngleDoubleDown } from 'react-icons/fa'

function Cover(){
    return(
        <div className="cover_container">
            <img src={MEN} alt="men" />
            <h1 className='main_heading'>Ready to become <br/> The Next Lord?</h1>
                <button className='theme-btn'>Join The Raffle</button>
            <span className='arrow'><FaAngleDoubleDown/></span>
        </div>
    )
}

export default Cover;