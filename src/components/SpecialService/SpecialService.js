import React, { useEffect, useState, useContext } from 'react';
import SpecialServiceCard from './SpecialServiceCard';
import { AuthContext } from '../Contexts/AuthProvider';

const SpecialService = () => {

    const [services, setServices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {

        setLoading(true);
        fetch('http://localhost:5000/cateringData')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })

    }, [setLoading]);

    if (loading) {
        return <div className='text-center py-44'><span className="loading loading-spinner text-primary loading-lg"></span></div>;
    };

    return (
        <div className='w-4/5 mx-auto mb-20'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-semibold underline'>Catering Service</h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map((service, id) => <SpecialServiceCard
                        key={id}
                        service={service}
                    ></SpecialServiceCard>)
                }
            </div>
            <div className='text-center mt-5'>
                <p className='text-lg font-semibold'>To get our Catering Service contact us: 01314993347</p>
            </div>
        </div>
    );
};

export default SpecialService;