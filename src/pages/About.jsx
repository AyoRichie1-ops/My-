import React from 'react'
import Navbars from '../components/Navbars'
import '../styles/About.css'
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image from '../assets/mypic2.png'
import Connect from '../components/Connect';

const About = () => {
    return (
        <div className='acontain'>
            <Navbars />
            <section className='aboutheading'>
                <div className='aboutflex'>
                    <div>
                        <h2 className='abouth2'>
                            ABOUT ME
                        </h2>
                    </div>
                    <div>
                        <div>
                            <h6 className='abouth6'>
                                I am a front-end developer based in Sydney. Has a little knowledge on Electrical Engineering.
                            </h6>
                            <p className='aboutp'>
                                I am a front-end developer based in Sydney looking for exciting opportunities.Has a little knowledge on Electrical Engineering. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm currrently exploring Reactjs, TailWind and a bit of Designing. While if I am not programming, I enjoy playing football, photography and playing Video games. Learning more to improve skill.
                            </p>
                        </div>
                        <div className='alinks'>
                            <div className='aboutlink'>
                                <Link to='/about' className="alink href text-decoration-none mx-lg-3">
                                    DOWNLOAD RESUME<AiOutlineDownload className='arrow' />
                                </Link>
                            </div>
                            <Link
                                className='text-decoration-none linkedin'
                                to="https://www.linkedin.com/in/abdul-lateef-onanusi-080b03303/ " target='blank'>
                                <FaLinkedinIn />
                            </Link>
                            <Link
                                className='linkedin'
                                to='https://github.com/AyoRichie1-ops'
                                target='blank'>
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <img className='pics2' src={image} alt="" />
            </div>
            <div className='capaflex'>
                <div>
                    <h4 className='capabilities'>
                        MY CAPABILITIES
                    </h4>
                </div>
                <div>
                    <p className='aboutpara'>
                        I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
                    </p>
                    <div className='divacapa'>
                        <p className='acapa'>
                            HTML
                        </p>
                        <p className='acapa'>
                            CSS
                        </p>
                        <p className='acapa'>
                            JAVASCRIPT
                        </p>
                        <p className='acapa'>
                            REACT
                        </p>
                    </div>
                </div>
            </div>
            <div className='linebreak'>
            </div>
            <div className='experience'>
                <h4 className='experienceh4'>
                    MY EXPERIENCE
                </h4>
                <div>
                    <div>
                        <h3 className='experienceh3'>
                            Freelance Developer
                        </h3>
                        <h6 className='experienceh6'>
                            Nov 2023 -Present
                        </h6>
                        <p className='experiencep'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div>
                        <h3 className='experienceh3'>
                            Front-End Intern
                        </h3>
                        <h6 className='experienceh6'>
                            Mar 2024 - June 2024
                        </h6>
                        <h5 className='experienceh5'>
                            Tech Studio
                        </h5>
                        <p className='experiencep'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>
            <div className='linebreak'>
            </div>
            <Connect />
        </div>
    )
}

export default About