import React, { useState } from 'react';
import { AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';

import './Home.css';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="Home">
            <Menu />
            <div className="HomeContainer">
                <h5>Fast Made Pizza</h5>
                <hr />
                <h1>Most Delicious Pizza <br /> in vancouver</h1>
                <Button>ORDER NOW</Button>
                <h6><AiOutlinePhone /> +1 (778) 000-0000</h6>
                <ul>
                    <li><a href=""><AiFillFacebook /></a></li>
                    <li><a href=""><AiFillInstagram /></a></li>
                    <li><a href=""><AiFillTwitterCircle /></a></li>
                </ul>
            </div>

        </div>
    );
};

export default Home;