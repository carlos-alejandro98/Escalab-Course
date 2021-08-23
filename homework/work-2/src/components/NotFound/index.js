import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/notFound.css';

const NotFound = () => {
    return (
        <div id='oopss'>
            <div id='error-text'>
                <span>404</span>
                <p>PAGE NOT FOUND</p>
                <p className='hmpg'>
                    <Link to="/" className="back">Back To Home</Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound;
