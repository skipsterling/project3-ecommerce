import React from 'react'
import {Carousel} from 'react-bootstrap'

const Slider = () => {
  return (
    <><Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="../images/BELLS-CLASSIC-HOODIE.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>BELLS CLASSIC HOODIE</h3>
        <p>Click on the "SHOP" link in the NAVBAR to learn more about this product.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="../images/BYRON-CLASSIC-LONG-SLEEVE-TEE.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>BYRON-CLASSIC-LONG-SLEEVE-TEE</h3>
        <p>Click on the "SHOP" link in the NAVBAR to learn more about this product.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../images/GVC.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>GVC Tee</h3>
        <p>Click on the "SHOP" link in the NAVBAR to learn more about this product.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></>
  )
}

export default Slider