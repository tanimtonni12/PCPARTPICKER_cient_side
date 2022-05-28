import React from 'react';
import { toast } from 'react-toastify';

const DeleteAllOrder = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { _id } = deletingOrder;
    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.result.deletedCount) {
                    toast.success(`Your Order is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  this order?</h3>
                    <p class="py-4">If you are sure then click on delete button</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label HtmlFor="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteAllOrder;