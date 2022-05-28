import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [part, setPart] = useState({});
    const { _id, img, name, description, price, p_quantity, min_quantity } = part;
    useEffect(() => {
        fetch(`https://morning-everglades-64553.herokuapp.com/tools/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    //react form handle
    const onSubmit = data => {
        const order = {
            productId: _id,
            productName: name,
            email: user.email,
            per_product_price: price,
            name: user.displayName,
            phone: data.phone,
            address: data.address,
            order_quantity: data.quantity

        }
        fetch('https://morning-everglades-64553.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`your order is placed.`);
                    navigate('/');


                }

                reset();


            });

    };


    return (
        <div className='flex lg:mt-10 justify-center items-center mb-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>Price: {price}</p>
                        <p>Quantity: {p_quantity}</p>
                        <p>Minimum-Order: {min_quantity}</p>


                    </div>
                </div >
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>

                                    </label>
                                    <input
                                        type="text" value={name} readOnly disabled placeholder="Product Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name")} />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>

                                    </label>
                                    <input
                                        type="email" value={user.email} readOnly disabled placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email")} />

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Per Product Price</span>

                                    </label>
                                    <input
                                        type="text" value={price} readOnly disabled placeholder="Product Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("per_price")} />

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>

                                    </label>
                                    <input
                                        type="number" placeholder="Order Quantity"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("quantity", {
                                            required: {

                                                value: true,
                                                message: 'quantity is required'

                                            },
                                            min: min_quantity,
                                            max: p_quantity

                                        })} />
                                    <label className="label">
                                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                        {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500"><p>Minimum order quantity at least {min_quantity} </p></span>}
                                        {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500"><p>Maximum order quantity {p_quantity} </p></span>}

                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>

                                    </label>
                                    <input
                                        type="text" placeholder="Your Address"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'address is required'

                                            }

                                        })} />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Phone Number</span>

                                    </label>
                                    <input
                                        type="text" placeholder="Your Phone Number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'phone number is required'

                                            }

                                        })} />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                                    </label>
                                </div>




                                <input disabled={errors.quantity ? true : false} className={`btn  w-full max-w-xs  text-white `} type="submit" value='Order Now' />
                            </form>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;