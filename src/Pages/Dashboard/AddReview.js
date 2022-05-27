import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    useEffect(() => {
        if (admin) {
            navigate('/dashboard')
        }


    }, [admin, navigate])
    if (adminLoading) {
        return <Loading></Loading>
    }




    const onSubmit = (data) => {
        const reviews = {
            name: user.displayName,
            ratings: data.ratings,
            review: data.review
        }
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviews),
        })
            .then((res) => {
                res.json()

            })
            .then((result) => {
                console.log(result)
                reset()
                toast('your review successfully given')
            });

    };

    return (
        <div >

            <div className='text-primary text-2xl text-center my-10 font-bold '><h2>Add Your Review</h2></div>

            <div className=' flex justify-center items-center' >

                <div className=" bg-base-100 w-96">

                    <form className='w-full mx-auto' onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>

                            </label>
                            <input
                                type="text" value={user?.displayName} readOnly disabled placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give Your Rating</span>

                            </label>
                            <select
                                type="text" placeholder="Give Your Rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("ratings", {
                                    required: {
                                        value: true,
                                        message: 'ratings is required'

                                    }




                                })}>
                                <option value="0" > 0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>




                            <label className="label">
                                {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}

                            </label>
                        </div>




                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Write Your Review</span>

                            </label>
                            <textarea
                                type="text" placeholder="Write Your Review"
                                className="textarea textarea-bordered w-full max-w-xs"
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'review is required'

                                    }

                                })} />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}

                            </label>
                        </div>


                        <input className='btn  w-full max-w-xs  text-white' type="submit" value='Add Review' />
                    </form>

                </div>
            </div>




        </div >

    );
};

export default AddReview;