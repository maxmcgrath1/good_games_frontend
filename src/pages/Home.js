import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
    return (
        <div className="home">
            <h1 className="homeMessage"> Hello! Welcome to Good Games, a site dedicated to <br /> playing games right here in your browser!</h1>
            <div className="slideContainer">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="slideImage"
                            src="https://media.istockphoto.com/photos/ticktacktoe-on-chalkboard-picture-id1134456281?k=20&m=1134456281&s=612x612&w=0&h=Qf7ajVwWoqf2z_6FqdAWGVCHbUMOdXApqdS6brx-w00="
                            alt="Tic-Tac-Toe Slide"
                        />
                        <Carousel.Caption>
                            {/* <h3 className='slideName'>Tic-Tac-Toe</h3>
                            <p className='slideText'>It'll always be good.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage"
                            src="https://i.imgur.com/9UbaFV6.png"
                            alt="SquareSmash Slide"
                        />

                        <Carousel.Caption>
                            {/* <h3 className='slideName'>SquareSmah</h3>
                            <p className='slideText'>This is a good card game.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideImage"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vVYr1XFkLxGDg_eY8UjZ9gHaEP%26pid%3DApi&f=1"
                            alt="Blackjack Slide"
                        />

                        <Carousel.Caption>
                            {/* <h3 className='slideName'>Blackjack</h3>
                            <p className='slideText'>This is a good card game</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home