import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsI } from '../../types/typesproduct';

const Home = () => {

  const [productCard, setProductCard] = useState<ProductsI[]>([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(resposta => setProductCard(resposta.data))
  }, [])

  return (
    <div>
    <h1>Store</h1>
      <div className="home">
        {
          productCard !== null &&
            productCard.map((item: ProductsI) => (
              <div className="card" key={item.id}>
                <h4>{item.title}</h4>
                <span>U$ {item.price}</span>
                <Link to={`/product/${item.id}`} className="button">Buy</Link>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Home