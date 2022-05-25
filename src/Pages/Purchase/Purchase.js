import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id);

    const [part, setPart] = useState({});
    const { img, name, description, price, quantity, minimum_order } = part;
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])


    return (
        <div className="card mx-auto lg:mt-20 lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Minimum-Order: {minimum_order}</p>

                <div >
                    <form className='flex'>
                        <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
                        <button className='btn btn-secondary btn-xs ml-2'>Update</button>
                    </form>

                </div>
            </div>
        </div >

    );
};

export default Purchase;