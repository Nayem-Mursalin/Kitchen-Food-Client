import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5500/reviews`)
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.error(err))
    }, [user?.email]);
    console.log(review);


    return (
        <div>
            <h2>Your Total Review is: {review.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(rev => <tr><td>{rev.name}</td> <td>{rev.message}</td></tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllReview;