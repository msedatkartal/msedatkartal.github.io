import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

export class CarouselSerf extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    }
    render() {

        return (
            <div>

                <div className='container-fluid serf-con' >
                    <div className="carousel-serf">

                        <OwlCarousel items={6} autoPlay={true} autoplayTimeout={5000}
                            className="owl-theme"
                            loop
                            //   nav  
                            autoplay
                            margin={50} 
                            responsive={this.state.responsive}
                            >
                            <div><img className="imgg" src={'img/carousel-serf/logo-1.png'} /></div>
                            <div><img className="imgg" src={'img/carousel-serf/logo-2.png'} /></div>
                            <div><img className="imgg" src={'img/carousel-serf/logo-3.png'} /></div>
                            <div><img className="imgg" src={'img/carousel-serf/logo-4.png'} /></div>
                            <div><img className="imgg" src={'img/carousel-serf/logo-5.png'} /></div>
                            <div><img className="imgg" src={'img/carousel-serf/logo-6.png'} /></div>
                        </OwlCarousel>
                    </div>
                </div>

            </div>
        )
    }
}


export default CarouselSerf  