import React from "react";
import undraw from './undraw.png'
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img src={undraw} className={`head-image 
        ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`} alt="headerImag" />
            <h1 className={`head-text 
        ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`}>{headTitle}</h1>
        </div>
    )
}

export default Header;