import React from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-primary font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.ProductName}</h2>
                    <p>Please pay: $ {parseFloat(order.order_quantity) * parseFloat(order.per_product_price)}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;