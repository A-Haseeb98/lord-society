import MEN from '../../assets/images/new.png'
import './style/index.css'
// import { FaAngleDoubleDown } from 'react-icons/fa'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'

function MintCover() {
    let price = 0.09;
    const [quantity, setQuantity] = useState(1)


    let clickHandler = (num, sign) => {
        if (quantity < 3 && sign == '+') {
            setQuantity(quantity + num)
        }
        else if (quantity > 1 && sign == '-') {
            setQuantity(quantity - num)
        }
    }
    var max_mint_amount = 3

    return (
        <div className="mint_cover_container">
            <img src={MEN} alt="men" />
            <div className='mint_cover_content'>
                <h1 className='mint_main_heading'>Ready to become <br /> The Next Lord?</h1>

                <div className='mint_container'>
                    <div className="message_box">
                        <p className='alert-p'>Minting Is Opened <br /> For Whitelisted Addresses. </p>
                    </div>

                    <div className="sellector_buttons_wrapper">
                        <button className='plus_minus_button' onClick={() => clickHandler(1, '-')}>
                            <HiMinus color='white' />
                        </button>
                        <div >
                            <span className='quantity'> QUANTITY</span>
                            <span className='mint_qantity'>{quantity}</span>

                        </div>

                        <button className='plus_minus_button' onClick={() => clickHandler(1, '+')}>
                            <HiPlus color='white' />
                        </button>
                    </div>
                    <p className='mint_price'>
                        {(price * quantity).toFixed(2)} ETH
                    </p>
                    <p className="text-center inst_para text-white font-weight-bold">
                        You can mint up to 3 Mutant per transaction. <br />
                    </p>
                    <button
                        className="connect_btn"
                        onClick={() => alert('hi')}
                    >
                        Confirm
                    </button>
                </div>
                {/* <button className='theme-btn mint_raffle_button'>Join The Raffle</button> */}
            </div>
        </div>
    )
}

export default MintCover;