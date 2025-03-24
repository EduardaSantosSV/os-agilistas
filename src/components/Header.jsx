import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header>
            <img src="https://osagilistas.com/wp-content/uploads/2021/02/Logo.svg" alt="Os Agilistas" />
            <nav>
                <ul className={isMenuOpen ? "nav-list menu-open" : "nav-list"}>
                    <li>
                        <a href="#">
                            Nosso podcast <MdOutlineArrowDropDown className="dropdown-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Insights ágeis <MdOutlineArrowDropDown className="dropdown-icon" />
                        </a>
                    </li>
                    <li><a href="#">Os Agilistas indicam</a></li>
                    <li><a href="#">Assine nossa Newsletter</a></li>
                </ul>
                {isMobile && (
                    <GiHamburgerMenu className="hamburger-menu" onClick={toggleMenu} />
                )}
            </nav>

            {isMenuOpen && (
                <div className="side-menu">
                    <IoIosClose className="close-menu-icon" onClick={toggleMenu} />
                    <ul>
                        <li><a href="#">Nosso podcast</a></li>
                        <li><a href="#">Insights ágeis</a></li>
                        <li><a href="#">Os Agilistas indicam</a></li>
                        <li><a href="#">Assine nossa Newsletter</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
