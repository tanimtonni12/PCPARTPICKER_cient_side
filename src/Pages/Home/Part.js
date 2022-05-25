import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { img, name, description, price, quantity, minimum_order } = part;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Min Order Quantity: {minimum_order}</p>
                <div className="card-actions">
                    <button className='btn btn-primary'><Link to={`/purchase/${part._id}`}>Purchase</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Part;