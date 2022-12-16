import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BootstrapTable from "./BootstrapTable";

const Settings = () => {
  let navigate = useNavigate();
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [settings, setSettings] = useState([{}]);

  const formSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("sub_title", subTitle);
    data.append("image", image);
    axios
      .post("/settings/create", data)
      .then(() => {
        axios.get("/settings").then((response) => {
          setSettings(response.data);
        });
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <h3 className="text-center">Home Page Settings</h3>
        <div className="col-md-4 py-5">
          <div className=" p-5 mb-4 bg-light rounded-3">
            <form onSubmit={formSubmit}>
              {/* Show Error Message */}
              {message.length > 0 && (
                <div className="alert alert-danger">{message}</div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sub Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="sub_title"
                  required
                  onChange={(e) => {
                    setSubTitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Background Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  required
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
            <div className="py-3 text-center">
            <Link to='/'>Back To Home</Link>
            </div>
          </div>
        </div>
        <div className="col-md-8 py-5">
          <div className=" py-5 mb-4 bg-light rounded-3">
            <BootstrapTable settings={settings} setSettings={setSettings}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
