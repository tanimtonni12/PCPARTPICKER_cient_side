import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate('/dashboard')
        }

        if (user) {
            fetch(`http://localhost:5000/myorder?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }

    }, [user, admin, navigate])

    if (adminLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Per Product Price</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Order Quantity</th>
                        <th>Total Amount</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <MyOrder key={order._id}
                            index={index}
                            order={order}
                        ></MyOrder>
                        )
                    }

                </tbody>
            </table>
        </div >
    );
};

export default MyOrders;