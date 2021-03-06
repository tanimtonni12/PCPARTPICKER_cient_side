import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { img, name, description, price, p_quantity, min_quantity } = part;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Per_Price: ${price}</p>
                <p>Quantity: {p_quantity}</p>
                <p>Min Order Quantity: {min_quantity}</p>
                <div className="card-actions">
                    <button className='btn btn-primary'><Link to={`/purchase/${part._id}`}>Purchase</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Part;