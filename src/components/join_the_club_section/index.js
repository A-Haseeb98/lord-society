import MEN1 from '../../assets/images/b1.jpeg'
import MEN2 from '../../assets/images/b2.jpeg'
import MEN3 from '../../assets/images/b3.jpeg'
import MEN4 from '../../assets/images/b4.jpeg'

import './style/index.css'

function JoinTheClub() {
    return (
        <div className="join_container">
            <div className='images_contaier'>
                <div>
                    <img src={MEN1} alt='pic' />
                </div>
                <div>
                    <img src={MEN2} alt='pic' />
                </div>
                <div>
                    <img src={MEN3} alt='pic' />
                </div>
                <div>
                    <img src={MEN4} alt='pic' />
                </div>
            </div>
            <div className='content_container'>
                <h1 className='theme-heading' >Join the club </h1>
                <p>When you buy a Lord, you don’t buy only an avatar or a piece of art.
                    <br /><br />
                    <span>You are gaining membership access to a club</span> whose benefits and offerings will increase over time.
                    Your Lord can serve as your digital identity, VIP pass for our casino,
                    breed a Junior lord, receive daily tokens and much more !
                </p>
            </div>


        </div>
    )
}

export default JoinTheClub;