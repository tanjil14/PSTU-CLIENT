import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";


const UpdateNotice = () => {
  
  const [updateNews, setUpdateNews] = useState({});
  
  const [loadNews, setLoadNews] = useState([]);
  console.log(loadNews)
  const [success, setSuccess] = useState(false);
  const { id } = useParams();
  const handleUpdateForm = (e) => {
    const url = `https://pure-wildwood-54871.herokuapp.com/notice/update/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateNews),
    })
      .then((res) => res.json())
      .then((data) => {
            if(data.modifiedCount > 0){
              setSuccess(true)
            }
      });

    e.preventDefault();
  };
  const handleTitleChange = (e) => {
    const updateTitle = e.target.value;
    // const updatedNews={title:updateTitle,description:updateNews.description,image:updateNews.image}
    // setUpdateNews(updatedNews)
    
    const updatedNews = { ...updateNews };
     updatedNews.title = updateTitle;
     setUpdateNews(updatedNews)
  };
  const handleDesChange = (e) => {
    const updateDes = e.target.value;
    const updatedNews = { ...updateNews };
    updatedNews.description = updateDes;
    setUpdateNews(updatedNews)
  };
  const handleImageChange= (e) => {
    const updateImage = e.target.value;
    const updatedNews = { ...updateNews };
    updatedNews.image = updateImage;
    setUpdateNews(updatedNews)
  };
  
  const handleUpdate = (id) => {
    fetch(`https://pure-wildwood-54871.herokuapp.com/notice/update/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateNews(data));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure,you want to delete?");
    if (proceed) {
      const url = `https://pure-wildwood-54871.herokuapp.com/notice/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingNews = loadNews.filter((nw) => nw._id !== id);
            setLoadNews(remainingNews);
          }
        });
    }
  };
  useEffect(() => {
    fetch("https://pure-wildwood-54871.herokuapp.com/notices")
      .then((res) => res.json())
      .then((data) => setLoadNews(data));
  }, []);
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h2 className="mb-4 text-center">Update Notice</h2>
          <div className="mt-3">
            {success && (
              <Alert severity="success">Notice Update Successfully!</Alert>
            )}
          </div>
          <Form onSubmit={handleUpdateForm}>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Notice Title</Form.Label>
              <Form.Control
                onChange={handleTitleChange}
                name="title"
                type="text"
                value={updateNews?.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Time Length</Form.Label>
              <Form.Control
                onChange={handleDesChange}
                name="length"
                as="textarea"
                rows={3}
                value={updateNews?.length}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Upload Routine URL</Form.Label>
              <Form.Control
                onChange={handleImageChange}
                name="URL"
                type="text"
                value={updateNews?.URL}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="dark" size="lg">
                Update
              </Button>
            </div>
          </Form>
          {loadNews.map((nw) => (
            <div key={nw._id} className="list-group mt-5">
              <Link
                to="#"
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{nw.title}</h5>
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => handleUpdate(nw._id)}
                      className="btn btn-warning btn-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(nw._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateNotice;
