import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrder = ({ order, index }) => {
    const { productName, per_product_price, order_quantity, _id, address, phone } = order;
    const handleDelete = () => {
        const proceed = window.confirm('are you sure that you want to delete this item?');
        if (proceed) {
            fetch(`http://localhost:5000/myorder/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.result.deletedCount) {
                        toast("successfully deleted")
                    }
                })
        }
    }
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
                {(per_product_price && !order.paid) && < button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>}
            </td>
        </tr >
    );
};

export default MyOrder;