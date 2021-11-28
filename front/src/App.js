 import React, { Component} from 'react'
import axios from 'axios'


const api = axios.create({
  baseURL : `http://localhost:5000/api/products`
})

class App extends Component {
 state = {
   courses: [ ]
 }

 constructor() {
   super( );
   api.get('/').then(res => {
     console.log(res.data)
     this.setState({courses: res.data})
   } )
 }
  
 render(){
  return (
    <> 
    <section className='container-general'>
      {this.state.courses.map(courses => 
     
<div className='dealCard'> 
   <h2>{courses.name}</h2> 
   <img src = {'http://localhost:5000/'+ courses.image} />
      <p> {courses.description} </p>
<p>{courses.brand}</p>
{/* <span>{courses.category}</span> */}

<div className="container-price">
  <span>💰</span>
  <p> <strong> S/  {courses.price} </strong></p>
</div>



</div>
    
      
       )}
    </section>
    
    </>
  )
 } 

 }

export default App
