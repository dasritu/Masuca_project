import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FiSmartphone } from 'react-icons/fi';
import { FaStoreAlt } from 'react-icons/fa';
import { TbGiftCard } from 'react-icons/tb';
import { FaHandsHelping } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
            <div className="upper">
                <ul>
                    <li><FiSmartphone />   Get App</li>
                    <li><FaStoreAlt />  Offline Store</li>
                    <li><TbGiftCard />   Gift Card</li>
                    <li><FaHandsHelping />Help</li>
                </ul>
            </div>
            
            <nav className="main-nav">
                <div className="logo">
                    <h2><span>T</span>reasure</h2>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Contact</a></li>
                        <li className='search'><input type="text" placeholder="Search here"/><button type="submit"><FontAwesomeIcon icon={faSearch} /></button></li>
                        <li><button className="btn">Sign in</button></li>
                        <li className='icon'><a href="/"><FontAwesomeIcon icon={faCartArrowDown} /></a></li>
                    </ul>
                    
                </div>                
            </nav>
            <div className="lower">
                <ul>
                    <li>
                    <div class="dropdown">
                        <span>Product 1</span>
                        <div class="dropdown-content">
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        
                        
                        </div>
                        
                    </div>
                    </li>
                    <li>
                    <div class="dropdown">
                        <span>Product 2</span>
                        <div class="dropdown-content">
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        
                        
                        </div>
                        
                    </div>
                    </li>
                    <li>
                    <div class="dropdown">
                        <span>Product 3</span>
                        <div class="dropdown-content">
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div class="dropdown">
                        <span>Product 4</span>
                        <div class="dropdown-content">
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        
                        
                        </div>
                        
                    </div>
                    </li>
                    <li>
                    <div class="dropdown">
                        <span>Product 5</span>
                        <div class="dropdown-content">
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        <p><a href="/">Product 1.1</a></p>
                        <p><a href="/">Product 1.2</a></p>
                        <p><a href="/">Product 1.3</a></p>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
    </>
  )
}

export default Navbar