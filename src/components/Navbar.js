import React from 'react';
import logo from '../img/site-logo.png';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="layout navbar navbar-expand-lg bg-primary-subtle fixed-top">
                <div className="container-fluid">
                    <div className="navbar-collapse">
                        {/* Normal navbar for larger screens */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/">
                                    <img src={logo} width="30" alt="site-logo" />
                                </Link>
                            </li>
                            <li className="nav-item mx-2 mt-2">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2 mt-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2 mt-2 dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tasks
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">StopWatch</Link></li>
                                    <li><Link className="dropdown-item" to="/">Tic-Tac-Toe</Link></li>
                                    <li><Link className="dropdown-item" to="/">To-Do List</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Social media icons for larger screens */}
                        <ul className="social-icon navbar-nav ms-auto d-none d-lg-flex">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>

                        {/* Dropdown and social media icons for smaller screens */}
                        <div className="small-screen d-flex d-lg-none w-100">
                            <Link className="mt-4" to="/">
                                <img src={logo} width="25" alt="site-logo" />
                            </Link>
                            <ul className="navbar-nav me-auto mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </Link>
                                    <ul className="dropdown-menu w-100">
                                        <li><Link className="dropdown-item" to="/">Home</Link></li>
                                        <li><Link className="dropdown-item" to="/about">About</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link className="nav-link mx-3 disabled" aria-disabled="true">Tasks</Link>
                                        <li><Link className="dropdown-item" to="/">StopWatch</Link></li>
                                        <li><Link className="dropdown-item" to="/">Tic-Tac-Toe</Link></li>
                                        <li><Link className="dropdown-item" to="/">To-Do List</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="d-flex mt-4">
                                <ul className="social-icon navbar-nav d-flex flex-row">

                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
