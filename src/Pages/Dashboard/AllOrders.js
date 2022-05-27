import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl">All orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Order Quantity</th>
                            <th>Total Amount</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            orders.map((order, index) => <SingleOrder key={order._id}
                                order={order}
                                index={index}></SingleOrder>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;