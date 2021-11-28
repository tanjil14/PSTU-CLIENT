import React, { useEffect, useState } from 'react';

const Notices = () => {
    const [notices,setNotices]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/notices")
        .then(res=>res.json())
        .then(data=>setNotices(data))
    },[])
    return (
        <div className="Notices-list">
            <ul>
                {
                    notices.map(notice=><li key={notice._id}> <a href={notice.URL} target="_blank" rel="noreferrer">{notice.title}</a> </li>)
                }
            </ul>
        </div>
    );
};

export default Notices;