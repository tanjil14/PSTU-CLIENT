import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "./Dashboard";

const AddNews = () => {
  const { user } = useAuth();
  const [loadNews,setLoadNews]=useState([])
  const [news, setNews] = useState({});
  const [success, setSuccess] = useState(false);
  const handleForm = (e) => {
    
    //collect data
    const allNews = {
      ...news,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    //send to the server
    fetch("https://pure-wildwood-54871.herokuapp.com/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allNews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          const previousNews =[...loadNews]
          previousNews.push(allNews)
          setLoadNews(previousNews)
        }
      });
    e.preventDefault();
    
  };
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...news };
    newData[field] = value;
    setNews(newData);
  };
 
  const handleDelete=(id)=>{
    const proceed=window.confirm('Are you sure,you want to delete?');
    if(proceed){
      const url=`https://pure-wildwood-54871.herokuapp.com/news/${id}`
      fetch(url,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount>0){
              alert('Deleted Successfully')
              const remainingNews=loadNews.filter(nw=>nw._id !== id)
              setLoadNews(remainingNews)
          }
      })
    }
  }
  useEffect(()=>{
    fetch('https://pure-wildwood-54871.herokuapp.com/news')
    .then(res=>res.json())
    .then(data=>setLoadNews(data))
},[])
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h2 className="mb-4 text-center">Add News</h2>
          <div className="mt-3">
            {success && (
              <Alert severity="success">News Upload Successfully!</Alert>
            )}
          </div>
          <Form onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Enter News Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>News Title</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                name="title"
                type="text"
                placeholder="Enter News Title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                name="description"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Upload Image URL</Form.Label>
              <Form.Control
                onChange={handleBlur}
                name="image"
                type="text"
                placeholder="Enter image Url"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="dark" size="lg">
                Post
              </Button>
            </div>
          </Form>
         {
             loadNews.map(nw=><div key={Math.random()} className="list-group mt-5">
             <Link
               to='#'
               className="list-group-item list-group-item-action active"
               aria-current="true"
             >
               <div className="d-flex w-100 justify-content-between">
                 <h5 className="mb-1">{nw.title}</h5>
                 <div className="d-flex gap-2">
                   <Link to={`/news/update/${nw._id}`}>
                   <button  className="btn btn-warning btn-sm">Update</button> </Link>
                   <button onClick={()=>handleDelete(nw._id)} className="btn btn-danger btn-sm">Delete</button>
                 </div>
               </div>
             </Link>
           </div>)
         }
        </div>
      </div>
    </div>
  );
};

export default AddNews;
