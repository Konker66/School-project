import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="#"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/Logo.jpeg"
                            className="h-9"
                            alt="Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Senior Class of 2026
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-600 hover:scale-110 transition duration-200 me-4 md:me-6 flex items-center space-x-1"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-600 hover:scale-110 transition duration-200 me-4 md:me-6 flex items-center space-x-1"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/sdgls_2026?igsh=aDR0Z3ljbnl3dGZq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 hover:scale-110 transition duration-200 me-4 md:me-6 flex items-center space-x-1"
                            >
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.tiktok.com/@classofseniors6?_t=ZS-8wG8CHPayeO&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 hover:scale-110 transition duration-200 flex items-center space-x-1"
                            >
                                <FaTiktok />
                                <span>TikTok</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025{" Made with ❤️ by KONKER . "}
                    <a href="https://konkerportfolio66.vercel.app/" className="hover:underline">
                        <img
                            src="/Logo1.png"
                            className="h-7 w-7 inline-block rounded-full transition duration-200 hover:scale-110 hover:border hover:border-blue-600"
                            alt="Logo"
                        />
                    </a>
                </span>
            </div>
        </footer>
    );
};