import React from 'react';


const SingleOrder = ({ order, index, refetch, setDeletingOrder }) => {

    const { productName, per_product_price, address, phone, order_quantity } = order;
    const totalAmount = parseFloat(order_quantity) * parseFloat(per_product_price);

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{order.email}</td>

            <td>{address}</td>
            <td>{phone}</td>
            <td>{order_quantity}</td>
            <td>{totalAmount}</td>
            <td>
                {(per_product_price && !order.paid) && < button onClick={() => setDeletingOrder(order)} className="btn btn-xs btn-error"><label htmlFor="order-delete-confirm-modal">Delete</label></button>}
            </td>
        </tr>


    );
};

export default SingleOrder;