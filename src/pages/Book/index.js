import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

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

            <h1>Registered Books</h1>
            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Data:</strong>
                    <p>12/07/2017</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251fc5"/>
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Data:</strong>
                    <p>12/07/2017</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251fc5"/>
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Data:</strong>
                    <p>12/07/2017</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251fc5"/>
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Data:</strong>
                    <p>12/07/2017</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251fc5"/>
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Data:</strong>
                    <p>12/07/2017</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251fc5"/>
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Data:</strong>
                    <p>12/07/2017</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="#251fc5"/>
                    </button>
                    <button>
                        <FiTrash2 size={20} color="#251fc5"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}