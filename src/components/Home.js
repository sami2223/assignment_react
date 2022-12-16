import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import Banner from '../assets/images/banner.jpg';

const Home = () => {

  const [settings, setSettings] = useState([]);
  const url = 'http://localhost:8000/storage/';

  useEffect(() => {
    axios 
      .get("/settings")
      .then((response) => {
        setSettings(response.data);
        console.log(settings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Banner}
            alt="slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption style={{ marginBottom: "250px" }}>
            <h3 className="text-uppercase" style={{ color: "orangered" }}>
            green wend energy
            </h3>
            <p className="text-uppercase">empowering future with solar energy</p>         
            <Link to="/survey" className="btn btn-primary text-uppercase" style={{ margin:"5px" }}>
              Have Queries?
            </Link>
            <Link to="/settings" className="btn btn-primary text-uppercase" style={{ margin:"5px" }}>
              Settings Page
            </Link>
          </Carousel.Caption>
          
        </Carousel.Item>
      {settings.map((obj, i) => (
        <Carousel.Item interval={3000} key={i}>
          <img
            className="d-block w-100"
            src={url + obj.image}
            alt="slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption style={{ marginBottom: "250px" }}>
            <h3 className="text-uppercase" style={{ color: "orangered" }}>
              {obj.title}
            </h3>
            <p className="text-uppercase">{obj.sub_title}</p>         
            <Link to="/survey" className="btn btn-primary text-uppercase" style={{ margin:"5px" }}>
              Have Queries?
            </Link>
            <Link to="/settings" className="btn btn-primary text-uppercase" style={{ margin:"5px" }}>
              Settings Page
            </Link>
          </Carousel.Caption>
          
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home;
