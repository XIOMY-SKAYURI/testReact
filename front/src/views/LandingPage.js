import React, {Component} from 'react'
import axios from 'axios'
const api = axios.create({
    baseURL : `http://localhost:5000/api/products`
  })

  
  
  class LandingPage extends Component {
   state = {
    product: [ ]
   }
  
   constructor() {
     super( );
     api.get('/').then(res => {
       console.log(res.data)
       this.setState({product: res.data})
     } )
   }
    
   render(){
    return (
      <> 
             
      <section className='container-general'>
    
                {this.state.product.map(product => 
       
      <div className='dealCard'> 
     
        <img src = {'http://localhost:5000/'+ product.image} />
        <h2 class="btn card-title">{product.name}</h2> 
        <a href={`/${product._id}`}><button class="btn see-more">see product</button></a>
      </div>
      
        
         )}
      </section>
      
      </>
    )
   } 
  
   }
  
  export default LandingPage