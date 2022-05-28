import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.gif'

const NotFound = () => {
    return (
        <div className='container mx-auto' >
            <Link to='/'>   <img src={notfound} alt="" /></Link>
        </div>
    );
};

export default NotFound;