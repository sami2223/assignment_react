import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Survey = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("M");
  const [imgVid, setImgVid] = useState("");
  const [voice, setVoice] = useState("");
  const [message, setMessage] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("gender", gender);
    data.append("img_or_vid", imgVid);
    data.append("voice", voice);
    axios
      .post("/survey/create", data)
      .then((response) => {
        navigate("/email-sent");
      })
      .catch((error) => {
        setMessage(
          error.response.data.message
        );
      });
  };

  return (
    <>
      <div className="py-5">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 p-5 mb-4 bg-light rounded-3">
            <h3 className="text-center">Survey</h3>
            <form onSubmit={formSubmit}>
              {/* Show Error Message */}
              {message.length > 0 && (
                <div className="alert alert-danger">{message}</div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Gender
                </label>
                <div>
                  <input
                    type="radio"
                    value="M"
                    checked={gender === "M"}
                    onChange={(e) =>  setGender(e.target.value)}
                  />{" "}
                  Male
                </div>
                <div>
                  <input
                    type="radio"
                    value="F"
                    checked={gender === "F"}
                    onChange={(e) =>  setGender(e.target.value)}
                  />{" "}
                  Female
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Image OR Video
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="img_or_vid"
                  required
                  onChange={(e) => {
                    setImgVid(e.target.files[0]);
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="voice" className="form-label">
                  Voice
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="voice"
                  required
                  onChange={(e) => {
                    setVoice(e.target.files[0]);
                  }}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Survey;
