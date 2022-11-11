import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const handlereview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;


        const review = {
            name,
            email,
            message,
        }

        fetch('https://kitchen-food-server-nayem-mursalin.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <form onSubmit={handlereview}>
            <h4 className="text-4xl">Add your Review</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='firstName' type="text" placeholder="Name" className="input input-bordered w-full " />
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Review"></textarea>
            <input className='btn btn-primary' type="submit" value="Submit Review" />
        </form>
    );
};

export default MyReview;