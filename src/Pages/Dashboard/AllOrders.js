
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteAllOrder from './DeleteAllOrder';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

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

                            orders.map((order, index) => <SingleOrder key={order._key}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}></SingleOrder>

                            )
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteAllOrder
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteAllOrder>}
        </div>
    );
};

export default AllOrders;