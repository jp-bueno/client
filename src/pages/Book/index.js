import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import api from '../../services/api';

import './style.css'
import logoImg from '../../assets/logo.svg'

export default function Books() {

    const [books, setBooks] = useState([]);

    const username = localStorage.getItem('username');
    const acessToken = localStorage.getItem('acessToken');

    const history = useHistory();

    useEffect(() => {
        const headers = { Authorization: `Bearer ${acessToken}` };   
        api.get('api/book/v1', {headers: headers}).then(response => {
            setBooks(response.data._embedded.bookVoes)
        })
    }, [setBooks, acessToken])

    return (
        <div className="book-container">
            <header>
                <img src={logoImg} alt="Erudio"/>
                <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="/book/new">Add new book</Link>
                <button type="button">
                    <FiPower size={18} color="#251fc5"/>
                </button>
            </header>

            <h1>Registered Books</h1>
            <ul>
                {books.map(book => {
                    <li>
                        <strong>Title:</strong>
                        <p>{book.title}</p>
                        <strong>Author:</strong>
                        <p>{book.author}</p>
                        <strong>Price:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(book.price)}</p>
                        <strong>Release Data:</strong>
                        <p>{Intl.DateTimeFormat('pt-BR').format(new Date (book.launchDate))}</p>
                        <button type="button">
                            <FiEdit size={20} color="#251fc5"/>
                        </button>
                        <button>
                            <FiTrash2 size={20} color="#251fc5"/>
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}