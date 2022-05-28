import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';
import { useQuery } from 'react-query';
import DeleteMyOrder from './DeleteMyOrder';

const MyOrders = () => {

    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate('/dashboard')
        }
    }, [admin, navigate])


    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://morning-everglades-64553.herokuapp.com/myorder?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    if (adminLoading) {
        return <Loading></Loading>
    }
    console.log(deletingOrder)

    return (
        <div>
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
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></MyOrder>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteMyOrder
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteMyOrder>}
        </div >
    );
};

export default MyOrders;