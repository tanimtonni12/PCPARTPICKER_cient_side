
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const [viewForm, setViewForm] = useState(false);




    const { data, isLoading, refetch } = useQuery("repoData", () => fetch(`https://morning-everglades-64553.herokuapp.com/user/one?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));



    const onSubmit = data => {
        const users = {
            linkin: data.linkin,
            Address: data.address,
            phone: data.phone,
            profession: data.profession
        }
        if (user.email) {
            fetch(`https://morning-everglades-64553.herokuapp.com/user/${user.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(users),
            })
                .then((res) => res.json())
                .then((data) => {
                    toast.success("update Your Profile Information");
                    console.log(data)

                });
        }
        reset();

    }


    return (
        <div>
            <div className="my-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
                    <div className="avatar">
                        <div className="w-64 mr-5 rounded">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Name: {user?.displayName}</h1>
                        <h1 className="text-xl font-bold">Email: {user?.email}</h1>
                        <h1 className="text-xl font-bold">Address: {data?.Address}</h1>
                        <h1 className="text-xl font-bold">Number: {data?.phone}</h1>
                        <h1 className="text-xl font-bold">Profession: {data?.profession}</h1>
                        <h1 className="text-xl font-bold">Linkedin: {data?.linkin}</h1>






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
                            type="text" required placeholder="Your Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Phone Number</span>

                        </label>
                        <input
                            type="text" required placeholder="Your Phone Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your profession</span>

                        </label>
                        <input
                            type="text" required placeholder="Your Profession"
                            className="input input-bordered w-full max-w-xs"
                            {...register("profession")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Linkin</span>

                        </label>
                        <input
                            type="text" required placeholder="Your LinkIn Profile Link"
                            className="input input-bordered w-full max-w-xs"
                            {...register("linkin")} />

                    </div>


                    <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
                </form>
            }

        </div >




    );

};

export default MyProfile;