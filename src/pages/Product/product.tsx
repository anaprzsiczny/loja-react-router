import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ParamsI, ProductsI } from '../../types/typesproduct';

const Product = () => {

  const params = useParams<ParamsI>()
  const [produto, setProduto] = useState<ProductsI>()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(resposta => setProduto(resposta.data))
  }, [])

  return (
    <div>
      <h1>O Produto escolhido foi: </h1>
      {
        produto !== null &&
        <div className="product">
          <div className="info">
            <h2>{produto?.title}</h2>
            <p>U$ {produto?.price}</p>
            <p>{produto?.description}</p>
            <p>#{produto?.category}</p>
            <Link to="/" className="button">Voltar</Link>
          </div>
          <img src={produto?.image} />
        </div>
      }
    </div>
  )
}

export default Product