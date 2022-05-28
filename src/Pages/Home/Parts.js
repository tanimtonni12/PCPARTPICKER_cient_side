import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://morning-everglades-64553.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div className='mx-auto px-12'>
            <div><h2 className='text-4xl font-bold text-center text-primary uppercase my-20'>Our Products</h2></div>
            {parts.length < 1 && <Loading></Loading>}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(part => <Part key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;