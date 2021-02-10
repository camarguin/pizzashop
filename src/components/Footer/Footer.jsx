import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

import './Footer.css';
import PizzariaIcon from '../../media/PizzariaIcon.png';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <div className="pizzaIcon-container">
                    <img src={PizzariaIcon} alt="" />
                </div>
                <div className="hours-container">
                    <h3>Hours</h3>
                    <p>
                        Sunday: 11am - 9:30pm <br />
                        Monday - Friday: 10am - 11:30pm <br />
                        Saturday: 11am - 10pm
                    </p>
                </div>
                <div className="location-container">
                    <h3>Location</h3>
                    <p>
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor
                    </p>
                </div>
                <div className="phone-container">
                    <h3>Phone</h3>
                    <p>+1 (778) 000-0000</p>
                </div>
                <div className="followUs-container">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href=""><AiFillFacebook /></a> </li>
                        <li><a href=""><AiFillInstagram /></a> </li>
                        <li><a href=""><AiFillTwitterCircle /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;