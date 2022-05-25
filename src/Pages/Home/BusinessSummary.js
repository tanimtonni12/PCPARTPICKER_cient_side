import React from 'react';
import { GoProject } from 'react-icons/go';
import { AiTwotoneLike } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

const BusinessSummary = () => {
    return (

        <div className='text-center my-20 '>
            <div className='my-20'>
                <h2 className='text-primary uppercase text-4xl font-bold'>an ultimate brand in market for 10 years </h2>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-figure">
                        <h2 className="text-5xl text-teal-500"><GoProject /></h2>
                    </div>
                    <div className="stat-title font-bold text-xl">We have</div>
                    <div className="stat-value py-3 text-teal-500">500+</div>
                    <div className="stat-desc font-bold text-xl">Complete Projects</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <h2 className='text-5xl text-amber-500'><FaUsers /></h2>
                    </div>
                    <div className="stat-title font-bold text-xl ">We have</div>
                    <div className="stat-value py-3 text-amber-500">1000+</div>
                    <div className="stat-desc font-bold text-xl">Happy Clients</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <h2 className='text-5xl text-sky-500'><AiTwotoneLike /></h2>
                    </div>
                    <div className="stat-title font-bold text-xl">We have earned</div>
                    <div className="stat-value py-3 text-sky-500">10K+</div>
                    <div className="stat-desc font-bold text-xl">Positive Feedbacks</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <h2 className='text-5xl text-red-500'><GiTakeMyMoney /></h2>
                    </div>
                    <div className="stat-title font-bold text-xl">Every year</div>
                    <div className="stat-value py-3 text-red-500">1M+</div>
                    <div className="stat-desc font-bold text-xl">Annual Revenue</div>
                </div>

            </div>



        </div >

    );
};

export default BusinessSummary;