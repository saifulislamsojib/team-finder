import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-danger text-center mt-5">
            <h1>Not Found</h1>
            <h2>404 Error</h2>
            <Link to="/">
                <button className="btn btn-warning mt-4 text-white">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;