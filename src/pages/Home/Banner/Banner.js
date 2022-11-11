import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6 mb-8">
            <div className='w-21'>
                <figure><img className='w-2/5' src="https://i.ibb.co/WFsk089/johnathan-macedo-4-NQEvx-W2-4w-unsplash.jpg" alt="Kitchen"
                /></figure>
            </div>

            <div className="card-body">
                <h2 className="card-title">Are you Hungry?</h2>
                <p>Click the button to See our Menu</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/services'>Menu</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;