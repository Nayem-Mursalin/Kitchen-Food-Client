import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5500/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mb-10'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="font-semibold text-5xl">Some of our Services</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br /> words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 mid:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;