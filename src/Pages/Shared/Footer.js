import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../images/App Store Badgeapple.png'
import playStore from '../../images/Google Play Badge.png'

const Footer = () => {
    return (
        <footer className=" bg-black py-5">
            <div className="">

                <div className="row flex items-center justify-around lg:text-start text-center ">
                    <div className="lg:col-10 md:col-6 sm:col-12">

                        <p className="text-white "><small>
                            © PC<span className='text-primary'>PART</span>PICKER Ltd. All rights reserved
                        </small></p>
                        <p className="text-white "><small>
                            Contact Us: +880181093933
                        </small></p>
                        <p className="text-white "><small>
                            Email: pcpartpicker@gmail.com
                        </small></p>
                        <Link className='text-decoration-none text-white ' to='/returnPolicy'><small>Return Policy</small></Link>
                    </div>
                    <div className="lg:col-2 md:col-6 sm:col-12">
                        <div className="row lg:text-start text-center">
                            <div className="lg:col-12 md:col-12 mb-3">
                                <h5 className="text-white mt-3">Get The App</h5>

                            </div>
                            <div className="lg:col-12 md:col-12 sm:col-12 mb-3">

                                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><img src={app} alt="" /></a>

                            </div>
                            <div className="lg:col-12 md:col-12 sm:col-12">
                                <a href="https://playstore.com/" target="_blank" rel="noopener noreferrer"><img src={playStore} alt="" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </footer>
    );
};

export default Footer;