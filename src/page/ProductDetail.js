import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null)
  const getProductDetail = async() =>{
    let url = `https://my-json-server.typicode.com/way0101/kil-hm/products/${id}`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
      <Container>
        <Row>
          <Col>
            <img className='detail-image' src={product?.img} alt="" /> 
          </Col>
          <Col>
           <h1>{product?.title}</h1>
           <h2>{product?.price}원</h2>
           <h3>{product?.choice === true ? "ConciousChoic": ""}</h3>
           <select className="select" name="" id="">
           {product?.size.map((item)=>(
               <option value={item}>{item}</option>
               ))}
            </select>
            <button className='add-btn'>
            <FontAwesomeIcon icon="fa-solid fa-cart-plus" />추가
            </button>
          </Col>
        </Row>
      </Container>

  )
}

export default ProductDetail