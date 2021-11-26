import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Dashboard from "./Dashboard";

const AddNews = () => {
    const [news,setNews]=useState({})
    
    const handleForm=(e)=>{
          
        
        e.preventDefault();
    }
    const handleBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field,value)
        const newData={...news}
        newData[field]=value;
        setNews(newData)
    }
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h2 className="mb-4 text-center">Add News</h2>
          <Form onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>News Title</Form.Label>
              <Form.Control onBlur={handleBlur} name="title" type="email" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control onBlur={handleBlur} name="textarea" as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
