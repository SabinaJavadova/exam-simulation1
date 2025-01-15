import { useEffect, useState } from "react";
import React from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import style from "./index.module.scss";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const nav = useNavigate();
  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setProducts(res.data);
      setProductsCopy(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <div className={style["divss"]}>
        <div className={style["searching"]}>
          <input
            className={style["searc"]}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
          />
        </div>
        <div className={style["cards"]}>
          <Grid container spacing={2}>
            {products.length > 0 &&
              filteredProducts.map((product) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={product._id}
                  onClick={() => {
                    nav(`../Detail/${product._id}`);
                  }}
                >
                  <div>
                    {product.img && (
                      <img src={product.img} alt={product.name} />
                    )}
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Products;
