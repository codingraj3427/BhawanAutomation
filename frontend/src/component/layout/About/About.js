import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FaWhatsapp } from "react-icons/fa";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhbjxspxa/image/upload/v1649520298/avatars/WhatsApp_Image_2021-12-26_at_2.42.40_PM-modified_sy1y13.png"
              alt="Founder"
            />
            <Typography>Rajarshi Chakraborty</Typography>
            <Button onClick={visitInstagram} color="primary">
              Bhawan Automation
            </Button>
            <span>
              
              This is our website please visit our website and buy products from this website.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

             <a href="https://whatsapp.com" target="blank">
              <FaWhatsapp className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
