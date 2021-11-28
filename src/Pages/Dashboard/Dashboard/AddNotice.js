import { Alert } from "@mui/material";
import React, { useState,useEffect  } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "./Dashboard";

const AddNotice = () => {
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
    fetch("http://localhost:5000/notices", {
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
      const url=`http://localhost:5000/notice/${id}`
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
    fetch('http://localhost:5000/notices')
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
          <h2 className="mb-4 text-center">Add Notice</h2>
          <div className="mt-3">
            {success && (
              <Alert severity="success">Notice Upload Successfully!</Alert>
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
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Notice Title</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                name="title"
                type="text"
                placeholder="Enter Notice Title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Time Length</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                name="length"
                as="textarea"
                rows={3}
                placeholder="Ex: July December 2020"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Upload Routine URL</Form.Label>
              <Form.Control
                onChange={handleBlur}
                name="URL"
                type="text"
                placeholder="Enter Notice Url"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="dark" size="lg">
                Upload
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
                   <Link to={`/notice/update/${nw._id}`}>
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

export default AddNotice;
