import React, { useEffect, useState } from 'react';
import Ratings from './Ratings';


const ViewReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(req => req.json())
            .then(data => setReviews(data.slice(-6)));
    }, [])

    return (
        <div className='container mx-auto my-16'>
            <div className='my-10 text-primary font-bold text-center text-4xl'><h2>Our Customers Reviews</h2></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {
                    reviews.map(item => <div key={item?._id}>
                        <div className="card w-full bg-base-100 shadow-xl ">
                            <div className="card-body text-center ">
                                <Ratings rate={item?.ratings}></Ratings>
                                <div className='flex justify-center'>
                                    <h2 className="card-title ">{item?.name}</h2>
                                </div>
                                <p>{item?.review}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ViewReviews;