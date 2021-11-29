import React, { useEffect, useState } from "react";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetch("https://pure-wildwood-54871.herokuapp.com/notices")
      .then((res) => res.json())
      .then((data) => setNotices(data));
  }, []);
  return (
    <div className="Notices-list">
      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            {" "}
            <a href={notice.URL} target="_blank" rel="noreferrer">
              {notice.title}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
