import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Form from './Form';
import '../styles/Connect.css';
import { Link } from 'react-router-dom';

const Connect = () => {
    return (
        <div id='below' className='connectflex'>
            <div>
                <h4 className='connecth4'>
                    LET'S CONNECT
                </h4>
                <p className='connectp'>
                    say hello at <a className='text-decoration-none text-white' href="/">
                        onanusiabdullateef@gmail.com
                    </a>
                </p>
                <p className='connectp'>
                    For more info, here's my <a className='text-decoration-none text-white' href="/about">
                        resume
                    </a>
                </p>
                <div className='profiles'>
                    <Link
                        to="https://www.linkedin.com/in/abdul-lateef-onanusi-080b03303/ " target='blank' className='profilelinks'>
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        to='https://github.com/AyoRichie1-ops' target='blank'
                        className='profilelinks'>
                        <FaGithub />
                    </Link
                    >
                    <Link
                        to="https://twitter.com/Onanusi12"
                        target='blank'
                        className='profilelinks'>
                        <FaXTwitter />
                    </Link
                    >
                    <Link
                        to="https://www.instagram.com/ora_oflagos?igsh=dzY3YndxbjMwOHlo&utm_source=qr"
                        target='blank'
                        className='profilelinks'>
                        <FaInstagram />
                    </Link
                    >
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Connect