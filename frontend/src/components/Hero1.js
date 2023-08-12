import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import '../styles/Hero1.css';
import img1 from '../images/img_1.jpg';
import img2 from '../images/img_2.jpg';
import img3 from '../images/img_3.jpg';
import img4 from '../images/img_4.jpg';
import img5 from '../images/img_5.jpg';
import img6 from '../images/img_6.jpg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Hero1() {
  return (
    <div className='App'>
      <Carousel responsive={responsive}>
        <div className='card'>
          <img className='product--image' src={img1} alt="img1" />
          <h2>Pendant</h2>
          <p className='price'>Pendant with resin </p>
          <p><button>See more</button></p>
        </div>
        <div className='card'>
          <img className='product--image' src={img2} alt="" />
          <h2>Clock</h2>
          <p className='price'>Wall Clock</p>
          <p><button>See more</button></p>
        </div>
        <div className='card'>
          <img className='product--image' src={img3} alt="" />
          <h2>Gift </h2>
          <p className='price'>Aniversery Gift</p>
          <p><button>See more</button></p>
        </div>
        <div className='card'>
          <img className='product--image' src={img4} alt="" />
          <h2>Pendant</h2>
          <p className='price'>Pendant with resin </p>
          <p><button>See more</button></p>
        </div>
        <div className='card'>
          <img className='product--image' src={img5} alt="" />
          <h2>Pendant</h2>
          <p className='price'>Pendant with resin </p>
          <p><button>See more</button></p>
        </div>
        <div className='card'>
          <img className='product--image' src={img6} alt="" />
          <h2>Pendant</h2>
          <p className='price'>Pendant with resin </p>
          <p><button>See more</button></p>
        </div>
      </Carousel>;

    </div>
  )
}
