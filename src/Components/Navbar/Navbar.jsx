import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { useState,useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const[sticky,setsticky]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
           window.scrollY > 50 ? setsticky(true) : setsticky(false)
        })
    },[]);
return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo'/>
            <ul>
                    <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
                    <li><Link to='about' smooth={true} offset={-150} duration={500} >About</Link></li>
                    <li><Link to='services' smooth={true} offset={0} duration={500} >Services</Link></li>
                    <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>   
                    <li><Link to='program' smooth={true} offset={-260} duration={500} >Program</Link></li>
                    <li><Link to='testimonial' smooth={true} offset={-260} duration={500} >Testimonial</Link></li> 
                    <li><Link to='contact' smooth={true} offset={-260} duration={500}  className='btn'>Contact</Link></li>
            </ul>

    </nav>
)
}

export default Navbar