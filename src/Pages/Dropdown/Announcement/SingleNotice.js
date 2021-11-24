import React from 'react';
import { Link } from 'react-router-dom';

const SingleNotice = ({title,date,time,writer}) => {
    return (
        <div className="notice-box border border-1 shadow-lg p-3 my-4">
        <h5 className="notice-header mb-0">{title}</h5>
        <small>Posted on {time} by {writer}</small>
        <br /> 
        <br />
        <hr />
        <br />
        <small>{date}</small> <br />
        <Link to="#">Read more</Link>
    </div>
    );
};

export default SingleNotice;