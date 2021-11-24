import React from 'react';

const Staff = ({img,name,deg,dep,phone}) => {
    console.log(name)
    return (
        <div className="dean-stuff-profile d-flex flex-column flex-md-row p-2 my-4 ">
        <div className="dean-img pe-md-5 mb-2">
            <img src={img} alt="img" />
        </div>
        <div className="dean-info  ps-md-5">
          <address>
            {name} <br />
            {deg} <br />
            Department: {dep} <br />
            Phone: {phone} <br />
          </address>
        </div>
      </div>
    );
};

export default Staff;