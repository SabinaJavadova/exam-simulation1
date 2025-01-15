

import React, { useState, useEffect  } from 'react'
import styles from "./index.module.scss"
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants'
import axios from "axios"
const Details = () => {
    const [product, setProducts] = useState()
    const {id} = useParams()
    
    const getProduct = async () =>{
        const res = await axios(`${BASE_URL}/${id}`)
        setProducts(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        getProduct()
    }, [id])
    
  return (
    <>
  {console.log(product)
  }
     {product && <div className={styles["product-detail"]}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>}
    
    </>
  )
}

export default Details