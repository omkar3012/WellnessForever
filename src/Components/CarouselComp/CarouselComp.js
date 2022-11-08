import Carousel from 'react-bootstrap/Carousel';
import './CarouselComp.css'
import carImg1 from "../../assets/images/carousel1.jpg"
import carImg2 from "../../assets/images/carousel2.jpg"
import carImg3 from "../../assets/images/carousel3.jpg"

const CarouselComp = (props) => {
  return (
    <Carousel fade className='landingCarousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg1}
          alt="First slide"
          width="500"
          height="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg2}
          alt="Second slide"
          width="500"
          height="500"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImg1}
          alt="Third slide"
          width="500"
          height="500"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
