import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">{user.displayName}</h1>
                    <p className="py-6">{user.address}</p>
                    <button className="btn btn-primary">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;