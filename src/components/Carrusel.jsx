import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
  return (
    <>
        <Carousel className='container'>
            <Carousel.Item>
                <div>
                    <img src="img/banner01.jpeg" alt="banner01" className='img-fluid' />
                </div>
                <Carousel.Caption>
                <h3>1</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <img src="img/banner02.jpeg" alt="banner02" className='img-fluid' />
                </div>
                <Carousel.Caption>
                <h3>2</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <img src="img/banner03.jpeg" alt="banner03" className='img-fluid' />
                </div>
                <Carousel.Caption>
                <h3>3</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Carrusel