import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate()
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
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.productName}</td>
                            <td>{order.per_product_price}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                            <td>{order.order_quantity}</td>
                            <td>{parseFloat(order.order_quantity) * parseFloat(order.per_product_price)}</td>
                            <td>{(order.per_product_price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(order.per_product_price && order.paid) &&
                                    < span className='text-success'>Paid</span>

                                }
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div >
    );
};

export default MyOrders;