import React from 'react';
import Rating from 'react-rating';

const Ratings = ({ rate }) => {
    return (
        <div className='flex justify-center'>
            <Rating
                initialRating={rate}
                readonly
                emptySymbol="fa fa-star-o cus-icon"
                fullSymbol="fa fa-star cus-icon"
            />
        </div>
    );
};

export default Ratings;