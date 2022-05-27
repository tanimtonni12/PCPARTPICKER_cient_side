import React from 'react';

import { Link } from 'react-router-dom';


const SingleOrder = ({ order, index }) => {

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
            <td><button className="btn btn-xs"><Link to=''></Link>Delete</button></td>
        </tr>


    );
};

export default SingleOrder;