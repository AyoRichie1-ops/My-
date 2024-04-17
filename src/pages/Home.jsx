import React, { useState } from 'react'
import Navbars from '../components/Navbars'
import '../styles/Home.css'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import pic from '../assets/mypic2.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import 'animate.css'
import Connect from '../components/Connect';
import FeaturedProjects from '../components/FeaturedProjects';
import Foooter from '../components/Foooter';

const Home = () => {
    return (
        <div className='contain'>
            <Navbars />
            <section className='flexheading'>

                <div className='heading'>
                    <h1
                        class="animate__animated animate__fadeInLeft name">
                        HI,I AM
                        ONANUSI ABDULLATEEF.
                    </h1>
                    <p className='desc'>
                        A Nigerian based front-end developer passionate about building accessible and user friendly websites.
                    </p>

                    <div className='hlinks'>
                        <div className='homelink'>
                            <a href='#below' className="hlink href text-decoration-none mx-lg-3">
                                CONTACT ME<GoArrowUpRight className='arrow' />
                            </a>
                        </div>
                        <Link
                            className='text-decoration-none linkedin' to="https://www.linkedin.com/in/abdul-lateef-onanusi-080b03303/ " target='blank'>
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            className='linkedin'
                            to='https://github.com/AyoRichie1-ops' target='blank'>
                            <FaGithub />
                        </Link>
                    </div>
                </div>

                <div className='pics'>
                    <img class="animate__animated animate__fadeInUp pics" src={pic} alt="" />
                </div>
            </section>
            <div className='linebreak'>
            </div>

            <FeaturedProjects />
            <div className='linebreak'>
            </div>

            <div className='aboutme'>
                <p className='moreinfo'>
                    I am a front-end developer based in Nigeria looking for exciting opportunities. Has ELectrical Engineering background. Likes to focus on accessibility when developing.
                </p>
                <Link className='mlink' to='/about'>
                    MORE ABOUT ME
                </Link>
            </div>
            <div className='aboutme2'>
                <h2 className='abouth2'>
                    ABOUT ME
                </h2>
                <div>
                    <h6 className='abouth6'>
                        I am a front-end developer based in Sydney. Has a little knowledge on Electrical Engineering.
                    </h6>
                    <p className='aboutp'>
                        I am a front-end developer based in Sydney looking for exciting opportunities.Has a little knowledge on Electrical Engineering. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm currrently exploring Reactjs, TailWind and a bit of Designing. While if I am not programming, I enjoy playing football, photography and playing Video games. Learning more to improve skill.
                    </p>
                </div>
                <Link className='mlink' to='/about'>
                    MORE ABOUT ME
                </Link>
            </div>
            <div className='linebreak'>
            </div>
            <Connect />
            <Foooter />
        </div>
    )
}

export default Home