import React from 'react'
import '../styles/Profile.css';
import { FaGreaterThan } from 'react-icons/fa';
import { FaUserCircle} from 'react-icons/fa';
import { FaFirstOrder} from 'react-icons/fa';
import { FaHeart} from 'react-icons/fa';
import { FaSignOutAlt} from 'react-icons/fa';
import { FaHome} from 'react-icons/fa';
export default function Profile() {
  return (
    <div>
      <div className="home">
        <li>Home</li>
        <li><FaGreaterThan/></li>
        <li>Profile</li>
      </div>
      <div className="main">
        <div className="list">
           <div className="nav_item">
            <div className="icon"> <FaUserCircle/></div>
          
            <h4>My Profile</h4>
           </div>
           <div className="nav_item">
           <div className="icon"> <FaHeart/></div>
                <h4>My WishList</h4>
           </div>
           <div className="nav_item">
           <div className="icon"> <FaFirstOrder/></div>
                <h4>My Orders</h4>
           </div>
           <div className="nav_item">
           <div className="icon"> <FaSignOutAlt/></div>
             <h4>Log Out</h4>
           </div>
        </div>
        <div className="profile">
            <div className="first_profile">
                <div className="main_profile">
                    <span></span>
                    <img src="https://adn-static1.nykaa.com/media/profilepic/7858108_20190715101512.jpg?15708962856271579878012575161157188290116745689799741678963200491" alt="" />
                    <div className="details">
                    <strong class="user_name">Rituparna Das</strong>
                    <div className="other_details">
                        <span className='head_level'>Email:</span>
                        <span className="head_value">rituparnadas67@gmail.com</span>
                    </div>
                    <div className="other_details">
                        <span className='head_level'>Mobile:</span>
                        <span className="head_value">8017193475</span>
                    </div>
                    <div className="other_details">
                        <span className='head_level'>DateofBirth:</span>
                        <span className="head_value">06/01/2000</span>
                    </div>
                    </div>
                </div>

            </div>
        <div className="address">
            <div className="add_head">
                <span className="add_detail">
                    <FaHome/>
                    MY ADDRESS
                </span>
                
            </div>
            <div className="add_address">
                <span>ADD NEW ADDRESS</span>
            </div>
        </div>
        <div className="add_box">
            <div className="box-content">
                <div className="district">HOOGHLY</div>
                <div className="box_name">RITUPARNA DAS</div>
                <div className="box_addr">BORO TALDANGA,CHANDANNAGAR,HOOGHLY</div>
                <div className="box_name"> +91 8017193475</div>
                <div className="add_buttons">
                <div className="edit">EDIT</div>
                <div className="remove">REMOVE</div>
            </div>
            </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}
