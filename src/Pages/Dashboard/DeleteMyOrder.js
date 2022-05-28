import React from 'react';
import { toast } from 'react-toastify';

const DeleteMyOrder = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { _id } = deletingOrder;
    console.log(_id)
    const handleDelete = () => {
        console.log('deleted')
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
                    toast.success(`Your order is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="order-delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete this order!</h3>
                    <p className="py-4">If you want to delete then click delete button!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteMyOrder;