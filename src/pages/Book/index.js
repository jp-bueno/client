import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import './style.css'
import logoImg from '../../assets/logo.svg'

export default function Book() {
    return (
        <div className="book-container">
            <header>
                <img src={logoImg} alt="Erudio"/>
                <span>Welcome, <strong>João</strong>!</span>
                <Link className="button" to="book/new">Add new book</Link>
                <button type="button">
                    <FiPower size={18} color="#251fc5"/>
                </button>
            </header>
        </div>
    )
}