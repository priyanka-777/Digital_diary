import React from 'react';
import Image from './about.jpeg'
import { FaLinkedin,FaGithub, FaInstagram} from "react-icons/fa";
import {AiOutlineMail } from "react-icons/ai";
import '../index.scss'
const About=()=>{
    return(
      <div class="section">
      <div class="container1">
        <div class="content-section">
          <div class="title">
            <h1>About Us</h1>
          </div><br></br><br></br>
          <div class="content">
            <h3>MyAmigo means a "FRIEND" who can share our emotions and feelings in all stages of life .</h3><br></br>
            <p>Digital Dairy is a place where you can record personal events and experiences online.Ratherthan keeping a traditional dairy or notebook to express your thoughts and feelings,you can create a dairy and make it available every where and anywhere,as long as you have access to the internet.
            </p>
            
          </div><br></br><br></br>
          <div class="social">&emsp;
          &emsp;
            <a href="https://www.linkedin.com/in/inagadapu-priyanka"><FaLinkedin size='35px' color="#a52a2a" /></a>&emsp;&emsp;
            <a href="https://github.com/priyanka-777"><FaGithub size='35px' color="#a52a2a"/></a>&emsp;&emsp;
            <a href="o180307@rguktong.ac.in"><AiOutlineMail size='35px' color="#a52a2a" /></a>&emsp;&emsp;
            <a href="https://www.instagram.com/_sai_priyaaa_"><FaInstagram size='35px' color="#a52a2a"/></a>
          </div>
        </div>
        <div class="image-section">
          <img src={Image} alt="image"/>
        </div>
      </div>
    </div>
    )
}
export default About;