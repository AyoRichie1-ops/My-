import React from 'react'
import image from '../assets/project1.png'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../styles/FeaturedProject.css'

const FeaturedProjects = () => {
    return (
        <div>
            <section>
                <div className='projectheading'>
                    <h2 className='projects'>
                        Featured Projects
                    </h2>
                    <p className='projectsp'>
                        Here are some of the selected projects that showcase my passion for front-end development.
                    </p>
                </div>

                <div className='flexproject'>
                    <div className='bg'>
                        <img className='project1' src={image} alt="" />
                    </div>
                    <div className='projectdetail'>
                        <h3 className='projectname'>
                            A landing page for a book website
                        </h3>
                        <p className='projectdesc'>
                            Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                        </p>
                        <h4 className='projectinfo'>
                            PROJECT INFO
                        </h4>
                        <div className='linebreak'>
                        </div>
                        <div className='year'>
                            <p className='projectp1'>
                                Year
                            </p>
                            <p className='projectp2'>
                                2024
                            </p>
                        </div>
                        <div className='linebreak'>
                        </div>
                        <div className='role'>
                            <p className='projectp1'>
                                Role
                            </p>
                            <p className='projectp2'>
                                Front-End Developer
                            </p>
                        </div>
                        <div className='linebreak'>
                        </div>
                    </div>
                </div>

                <div className='externallink'>
                    <div>
                        <Link className='live text-decoration-none' to="https://readify-eight.vercel.app/" target='blank'>
                            LIVE DEMO<GoArrowUpRight className='right' />
                            <div className="textunderline"></div>
                        </Link>
                    </div>
                    <div>
                        <Link className='live text-decoration-none' to="https://github.com/AyoRichie1-ops/Readify" target='blank'>
                            SEE ON GITHUB<FaGithub className='github' />
                            <div className="textunderline"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedProjects