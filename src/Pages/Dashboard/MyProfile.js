import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className="hero  bg-base-200">
            <div className="flex  items-center">
                <img src={user.photoURL} className="max-w-sm mr-10 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-2xl font-bold mb-4">{user.displayName}</h1>
                    <h1 className="text-2xl font-bold">{user.email}</h1>


                </div>

            </div>
        </div>
    );
};

export default MyProfile;