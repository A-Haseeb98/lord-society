import MEN from '../../assets/images/new.png'
import './style/index.css'
import { FaAngleDoubleDown } from 'react-icons/fa'

function Cover() {
    return (
        <div className="cover_container">
            <img src={MEN} alt="men" />
            <div className='cover_content'>
                <h1 className='main_heading'>Ready to become <br /> The Next Lord?</h1>
                <button className='theme-btn'>Join The Raffle</button>
                <p> </p>
            </div>
        </div>
    )
}

export default Cover;