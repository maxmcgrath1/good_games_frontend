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
                            // className="d-block w-100"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F395%2F1*ELxNO3RFHEpG_2JsViRILw.png&f=1&nofb=1"
                            alt="Tic-Tac-Toe"
                        />
                        <Carousel.Caption>
                            <h3>Tic-Tac-Toe</h3>
                            <p>It'll always be good.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SRzccZ8iRnfXTRYQk0jrqQHaGu%26pid%3DApi&f=1"
                            alt="Blackjack"
                        />

                        <Carousel.Caption>
                            <h3>Blackjack</h3>
                            <p>This is a good card game.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home