import './style/index.css'
import LINE from '../../assets/images/vertical_line.png'
function RoadMap() {
    return (
        <div className='roadmap_container'>
            <h1 className='theme-heading'>ROADMAP</h1>
            <div className='roadmap_wrapper'>
                <div className='r_section'>
                    <div className='num_section'>
                        <h1 className='theme-heading'>01</h1>
                        <div className='line_container'>
                            <img src={LINE} alt='line' />
                        </div>
                    </div>
                    <div className='content_section'>
                        <h2 >
                            NFT  <br />
                            The Lord Society</h2>

                        <p>Quality comes first. Our goal with Lord society is to build the most insightful community in the NFT space and bring the most USEFUL utilities possible.
                            <br /><br />
                            The holders of Lord society will be invited to several parties. The first event will take place 1 month after the drop,
                            and the community will vote to choose the location between different cities in the world. All events will be private,
                            only for our holders. Food and drinks will be provided for all holders.</p>
                    </div>
                </div>

                <div className='l_section'>
                    <div className='content_section'>
                        <h2>
                            NFT  <br />
                            Staking</h2>

                        <p>All holders will also have access to our staking platform, which will allow them to stake their Lord society and receive
                            5 $LOR tokens per day. We have planned advanced marketing campaigns around the world to increase the value of our token.
                            Remember 1 $LOR = 1 $LOR, FOREVER.</p>
                    </div>
                    <div className='num_section'>
                        <h1 className='theme-heading'>02</h1>
                        <div className='line_container'>
                            <img src={LINE} alt='line' />
                        </div>
                    </div>

                </div>

                <div className='r_section'>
                    <div className='num_section'>
                        <h1 className='theme-heading'>03</h1>
                        <div className='line_container'>
                            <img src={LINE} alt='line' />
                        </div>
                    </div>
                    <div className='content_section'>
                        <h2 >
                            Breed  <br />
                            Your Lord</h2>

                        <p>Lord owners can breed their Lord to create another series of NFTs called Junior Lord.
                            Owning a Junior lord literally doubles your numbers of $LOR tokens per day.</p>
                    </div>
                </div>

                <div className='l_section'>
                    <div className='content_section'>
                        <h2>
                            Casino  <br />
                            Development</h2>

                        <p>We already have our land in Decentraland metaverse and we will build a casino there.
                            Holders of Lord NFTs will be able to play with their $LOR token. They will also receive 10% of all casino profits,
                            with proceeds sent directly to the wallets holding Lord Society (accessible for holders of more than 3 months owners).</p>
                    </div>
                    <div className='num_section'>
                        <h1 className='theme-heading'>04</h1>
                        <div className='line_container'>
                            <img src={LINE} alt='line' />
                        </div>
                    </div>

                </div>

                <div className='r_section'>
                    <div className='num_section'>
                        <h1 className='theme-heading'>05</h1>
                        <div className='line_container'>
                            <img src={LINE} alt='line' />
                        </div>
                    </div>
                    <div className='content_section'>
                        <h2 >
                            Casino  <br />
                            Rewards</h2>

                        <p>Lord Holders can win $LOR token, cash ($20,000 weekly), ETH, NFTs or free spins on our casino ! We will invest 20 ETH of our smart contract in marketing to attract more people to our casino and increase your profits.
                            <br /><br />
                            We will host weekly competitions (Poker, Blackjack, Betting, Draftkings etc.) on Thursday night. Lord Society owners participate for free!</p>
                    </div>
                </div>

                <div className='l_section'>
                    <div className='content_section'>
                        <h2>
                            Welcome to  <br />
                            The Lord Society</h2>

                        <p>A merch store will be set up, and free merch will be sent to everyone who holds for more than two months. Merch will consist of hoodies, kids'
                            toys (collectibles), tees, and various accessories. All the roadmap steps (meeting in LA, physical events, merchandise process, giveaway delivery ???) will be filmed and documented in a documentary series.
                        </p>
                    </div>
                    <div className='num_section'>
                        <h1 className='theme-heading'>06</h1>
                        <div className='line_container'>
                            <img src={LINE} alt='line' />
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default RoadMap;