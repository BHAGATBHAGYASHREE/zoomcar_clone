import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png"; // Adjust the path to your logo file
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";

const Navbarcomp = () => {
    let navigate=useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navbarTop, setNavbarTop] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolled = currentScrollPos > 100; // Adjust the value as needed
            setScrolled(isScrolled);

            if (currentScrollPos > 600) {
                if (currentScrollPos > prevScrollPos) {
                    setNavbarTop("-100px"); // Move navbar off-screen smoothly
                } else {
                    setNavbarTop("0"); // Bring navbar back on-screen smoothly
                }
            } else {
                setNavbarTop("0"); // Reset navbar position
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const fetchLoggedInUser = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                if (response.ok) {
                    const users = await response.json();
                    const loggedInUser = users.find((user) => user.isLoggedIn);
                    if (loggedInUser) {
                        setLoggedInUser(loggedInUser);
                    }
                } else {
                    console.error("Failed to fetch users.");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchLoggedInUser();
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`} style={{ top: navbarTop }}>
            <div className={styles.navbarLeft}>
                <a href="/home">Home</a>
                <a href="/drivers">Drivers</a>
                <a href="#about">About Us</a>
            </div>
            <div className={styles.navbarLogo}>
                <a href="/home">
                <img src={logo} alt="Logo" className={styles.logoImg} />
                </a>
          
            </div>
            <div className={styles.navbarRight}>
            <a href="/search">

                <div className={styles.searchContainer}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />


                </div>
                </a>

                {loggedInUser ? (
                    <span  onClick={()=>{
                        navigate("/profile")
                    }} className={styles.userName}>{loggedInUser.name}</span>
                ) : (
                    <div className={styles.signContainer}>
                        <a href="/login">Log In</a>
                        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbarcomp;
