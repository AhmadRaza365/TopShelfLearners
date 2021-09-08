import './CatagoryList.css';

import React from 'react'

import { Link } from 'react-router-dom';


export default function CatagoryList() {
    return (
        <div className="CatagoryList">
            <ul>
                <li><Link to="/courses">All Categories</Link></li>
                <li><Link to="/courses">Development</Link></li>
                <li><Link to="/courses">Designing</Link></li>
                <li><Link to="/courses">Writing</Link></li>
                <li><Link to="/courses">Business</Link></li>
                <li><Link to="/courses">Marketing</Link></li>
                <li><Link to="/courses">Life Style</Link></li>
            </ul>
        </div>
    )
}
