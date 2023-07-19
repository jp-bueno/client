import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft} from "react-icons/fi";


import './style.css'
import logoImg from '../../assets/logo.svg'

export default function NewBook() {
    return(
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImg} alt="Erudio"/>
                    <h1>Add New Book</h1>
                    <p>Enter the book information and click on 'Add'!</p>
                    <Link className='back-link' to='/books'>
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Title"/>
                    <input placeholder="Author"/>
                    <input type="Date"/>
                    <input placeholder="Price"/>

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}