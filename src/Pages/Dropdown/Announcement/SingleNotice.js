import React from "react";

const SingleNotice = ({ title, length, time, writer,URL }) => {
  return (
    <div className="notice-box border border-1 shadow-lg p-3 my-4">
      <h5 className="notice-header mb-0">{title}</h5>
      <small>
        Posted on {time} by {writer}
      </small>
      <br />
      <br />
      <hr />
      <br />
      <small>{length}</small> <br />
      <a href={URL} target="_blank" rel="noreferrer">Read more</a>
    </div>
  );
};

export default SingleNotice;
