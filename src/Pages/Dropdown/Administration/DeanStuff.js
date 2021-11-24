import React from 'react';

const DeanStuff = ({name,deg,img,phone,email}) => {
    return (
        <div className="dean-stuff-profile d-flex flex-column flex-md-row p-2 my-4">
            <div className="dean-img pe-md-5 mb-2">
                <img src={img} alt="img" />
            </div>
            <div className="dean-info  ps-md-5">
              <address>
                {name} <br />
                {deg} <br />
                Contact no: {phone} <br />
                Email: {email} <br />
              </address>
            </div>
          </div>
    );
};

export default DeanStuff;