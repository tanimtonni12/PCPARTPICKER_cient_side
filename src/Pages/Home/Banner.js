import React from 'react';
import bg from '../../images/bg1.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-4xl font-bold uppercase">Welcome to pc<span className='text-primary'>part</span>picker</h1>
                    <p className="mb-5 text-xl text-justify ">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality computer parts at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;