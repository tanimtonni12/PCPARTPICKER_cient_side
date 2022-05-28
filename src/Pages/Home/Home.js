import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Ourtools from './Ourtools';
import Parts from './Parts';
import ViewReviews from './ViewReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Ourtools></Ourtools>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <ViewReviews></ViewReviews>
            <div className='flex items-center justify-center'>

                <div className='w-full bg-neutral '>

                    <h2 className='text-primary font-bold text-4xl text-center mt-5'>Delivery</h2>

                    <div className='mb-5 mt-3 text-xl text-center font-semibold  text-white py-5'>
                        <p >As all our deliveries are exclusively handled, we try to dispatch our products within 5 days delivery timescale. All tracking id will sent by emailed.</p>
                        <p >Our products should arrive in perfect condition. Any problems please do not hesitate to contact us either through our contact number, or by email.</p>
                        <p className='pb-3'>Please check our <Link to='/returnPolicy' className='text-decoration-none'>Returns Policy</Link> for returning goods.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;