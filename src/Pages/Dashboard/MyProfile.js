import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [users, setUsers] = useState([]);
    const [viewForm, setViewForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    console.log(user)
    const onSubmit = data => {
        const users = {
            linkin: data.linkin,
            Address: data.address,
            phone: data.phone,
            education: data.profession
        }
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.success) {
                    toast(`your profile is updated.`);
                    navigate('/dashboard');


                }

                reset();


            });
    }


    return (
        <div>
            <div className="my-10">
                <div className="flex  items-center">
                    <div class="avatar">
                        <div class="w-24 rounded mr-5">
                            <img src={user.photoURL} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{user.displayName}</h1>
                        <h1 className="text-2xl font-bold">{user.email}</h1>
                        <h1 className="text-2xl font-bold">{user.linkin}</h1>



                    </div>

                </div>
            </div >
            <button onClick={() => setViewForm(true)} className='btn btn-primary'>Update Profile</button>

            {
                viewForm && <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Address</span>

                        </label>
                        <input
                            type="text" placeholder="Your Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Phone Number</span>

                        </label>
                        <input
                            type="text" placeholder="Your Phone Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your profession</span>

                        </label>
                        <input
                            type="text" placeholder="Your Profession"
                            className="input input-bordered w-full max-w-xs"
                            {...register("profession")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Linkin</span>

                        </label>
                        <input
                            type="text" placeholder="Your LinkIn Profile Link"
                            className="input input-bordered w-full max-w-xs"
                            {...register("linkin")} />

                    </div>


                    <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
                </form>
            }

        </div>




    );
};

export default MyProfile;