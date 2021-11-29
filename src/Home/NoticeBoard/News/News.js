import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./News.css";
const News = () => {
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('https://pure-wildwood-54871.herokuapp.com/news')
        .then(res=>res.json())
        .then(data=>setNews(data))
      },[])
    return (
        <div className="news-list">
           <ul>
              {
                  news.map(nw=><li key={nw._id}>
                    <NavLink to={`/news/${nw._id}`} >
                      {nw.title}
                    </NavLink>
                    </li>)
              } 
        </ul> 
        </div>
    );
};

export default News;