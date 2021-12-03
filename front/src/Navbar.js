import React from 'react'
import logo from './img/ZEUS001.png'
const NavBar = () => (
    <div class="container-nav-search">
    <div class="nav">
    <input type="checkbox" id="nav-check"/>
    <div class="nav-header">
      <div class="nav-title">
      <div className='container-logo'>
    <h1> Zeus  </h1>
      <img className='logo' src={logo}></img>
    </div>
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
      <a href="" target="_blank">Contact</a>
      <a href="" target="_blank">SignUp</a>
      <a href="" target="_blank">SignIn</a>
    </div>
    </div>
    <div>
    <input type="search" placeholder="Busca tu Archivo" id="seacrh" />
    </div>

</div>
);

export default NavBar