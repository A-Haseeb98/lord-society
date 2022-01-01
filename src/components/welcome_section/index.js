import MEN from '../../assets/images/1.png'
import './style/index.css'

function Welcome() {
    return (
        <div className="welcome_container">
            <div className='content_container'>
                <h1 className='theme-heading'>  Welcome To <br /> The Lord Society</h1>
                <p><span>The Lord Society </span> is a collection of<span> 7777 Lords NFTs </span> inspired by the new wealthy generation of crypto-currency and NFTs.
                    <br/>
                    <br/>
                    Each piece is <span> a unique 3D artwork </span> with a collection of more than <span> 150+ traits. </span> The objective is to build the strongest community and project around NFTs.
                </p>
                <button className='theme-btn'>JOIN US</button>
            </div>
            <div className='carousal_contaier'>
                <img src={MEN} alt='slider'/>
            </div>

        </div>
    )
}

export default Welcome;