import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();
  const getProdcuts = async() =>{
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은", searchQuery)
    let url = `https://my-json-server.typicode.com/way0101/kil-hm/products?q=${searchQuery}`
    let res = await fetch(url)
    let data = await res.json()
    setProductList(data)
    
  }

  useEffect(()=>{
    getProdcuts()
  },[query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((product) => (
            <Col lg={3} sm={12} ><ProductCard item={product}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll