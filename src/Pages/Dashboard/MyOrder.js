import React from 'react';
import { Link } from 'react-router-dom';


const MyOrder = ({ order, index, refetch, setDeletingOrder }) => {
    const { productName, per_product_price, order_quantity, _id, address, phone } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{per_product_price}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{order_quantity}</td>
            <td>{parseFloat(order_quantity) * parseFloat(per_product_price)}</td>
            <td>{(per_product_price && !order.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {(per_product_price && order.paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                </div>}
            </td>
            <td>

                {(per_product_price && !order.paid) && < button onClick={() => setDeletingOrder(order)} className="btn btn-xs btn-error">    <label htmlFor="order-delete-confirm-modal">Delete </label></button>}

            </td>
        </tr >
    );
};

export default MyOrder;