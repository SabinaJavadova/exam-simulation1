import React from 'react'
import style from "./index.module.scss"
import { Helmet,  } from 'react-helmet-async';
const Home = () => {
  return (
    <>
    <Helmet>
    <title>Home Page</title>
   
  </Helmet>

      <div className={style["container"]}>
        <div className={style["text"]}>
        <h2>Finding Your Perfect Shoes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
          Integer accumsan tincidunt fringilla.</p>
          <div className="button">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home