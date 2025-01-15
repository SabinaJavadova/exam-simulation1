import React from "react";
import style from "./inex.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import Grid from "@mui/material/Grid2";
const Footer = () => {
  return (
    <>
    <footer>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4, lg: 2 }}>
          <ul>
            <h5>Navigation</h5>
            <li>Sell Online</li>
            <li>Features</li>
            <li>Shopping Cart</li>
            <li>Store Builder</li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 2 }}>
          <ul>
            
            <li>Mobile Commerse</li>
            <li>DropShipping</li>
            <li>Website Development</li>
            
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 2 }}>
          <ul>
            
            <li>Sell Online</li>
            <li>Features</li>
            <li>Shopping Cart</li>
            <li>Store Builder</li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 2 }}>
          <ul>
           
            <li>Hardware</li>
            <li>Software</li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 2 }}>
          <ul >
            <h5>Promo</h5>
            <li className={style["ims"]}><img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="" /></li>
            <a href="#">Finding Your Perfect Shoes</a>
            <p>Promo from nuary 15 — 25, 2019</p>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 2 }}>
          <ul >
            <h5>Contact Info</h5>
          <li><FaLocationDot />
          <a href="#">203 Fake St. Mountain View, San Francisco, California, USA</a></li>
           <li><FaPhoneAlt /> <a href="#"> +2 392 3929 210</a></li>
            <li><MdEmail /><a href="#"> emailaddress@domain.com</a></li>
          </ul>
        </Grid>
      </Grid>

      <p>Copyright ©2025 All rights reserved | This template is made with  by <FaHeart />Colorlib</p>
    </footer>
    </>
  );
};

export default Footer;
