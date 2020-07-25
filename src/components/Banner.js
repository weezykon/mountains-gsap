import React from 'react';
import { ReactComponent as RightArrow } from '../assets/svg/arrow-right.svg';

const Banner = () => {
    return (
        <section className='main'> 
            <div className="container">
                <div className='row'>
                    <h2>
                        <div className='line'>
                            <span>Come hike with us</span>
                        </div>
                        <div className='line'>
                            <span>Explore!!!</span>
                        </div>
                    </h2>
                    <div className='btn-row'>
                        <a href='/'>More <RightArrow /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
