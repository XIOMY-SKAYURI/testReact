import React, {useEffect, useState} from 'react'
import  Axios from 'axios'


function DetailProductPage (props)  {


  const [Product, setProduct] = useState([])

  const productId = props.match.params.productId

  useEffect(() => {
Axios.get(`http://localhost:5000/api/products?_id=${productId}`)
.then(
response => {
setProduct(response.data[0])
}

)
  },[])

  return (
    <div >

  </div>
  )

  };

export default DetailProductPage