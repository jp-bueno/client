import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './styles.css'

import api from '../../services/api';

import logoImg from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        const data = {
            username,
            password
        };

        try {
            const response = await api.post('auth/signin', data);

            localStorage.setItem('username', username)
            localStorage.setItem('acessToken', response.data.token)

            history.push('/books')
        } catch (err) {
            alert('Login failed! Try again!');
        }
    };

    return (
        <div className='login-container'>
            <section className='form'>
                <img src={logoImg} alt='Erudio Logo'></img>
                <form onSubmit={login}>
                    <h1>Acess Your Account</h1>
                    <input
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Password'
                    />

                    <button className='button' type='submit'>Login</button>
                </form>
            </section>
            <img src={padlock} alt='Login'></img>
        </div>
    )
}