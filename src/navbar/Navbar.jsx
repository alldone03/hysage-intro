import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
    const [isNavbarVisible, setNavbarVisibility] = useState(false);
    const toggleNavbar = () => {
        setNavbarVisibility(!isNavbarVisible);
    };

    const dataNavbar = [
        { name: "Home", link: '/#' },
        { name: "Feature", link: '/' },
        { name: "Product", link: '/product' },
        { name: "About Us", link: '/#aboutus' },
    ];

    useEffect(() => {
        Aos.init();

    }, [])
    return (
        <nav className="bg-white border-gray-200 z-50 fixed w-full  -top-0">
            <div className="w-screen flex flex-wrap items-center justify-between p-4 md:px-10">
                <HashLink to="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black text-abc w-[165px]">
                        Hysage
                    </span>
                </HashLink>

                <button
                    onClick={toggleNavbar}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={
                        !isNavbarVisible
                            ? "hidden w-full md:block md:w-auto "
                            : "w-full md:block md:w-auto "
                    }
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border shadow-lg md:shadow-none border-gray-100 rounded-lg bg-white md:flex-row  md:mt-0 md:border-0 md:bg-white   ">
                        {dataNavbar.map((data, index) => {
                            return (
                                <li key={index}>
                                    {!data.link.includes('#') ?
                                        <HashLink to={data.link} className="block py-2 pl-3 pr-4 md:px-4 text-black rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-black md:hover:text-gray-400 md:p-0   ">
                                            {data.name}
                                        </HashLink> : <HashLink smooth to={data.link} className="block py-2 pl-3 pr-4 md:px-4 text-black rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-black md:hover:text-gray-400 md:p-0   ">
                                            {data.name}

                                        </HashLink>}


                                </li>
                            );
                        })}
                        <li>
                            <Link to={"https://www.instagram.com/hysage.id/"} aria-label="ORDER NOW" rel="noopener noreferrer" target="_blank">

                                <button className="md:hidden transition-colors duration-300 ease-in-out delay-300 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 rounded-md text-white py-1">
                                    ORDER NOW
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={
                        !isNavbarVisible
                            ? "hidden w-full md:block md:w-auto "
                            : "w-full md:block md:w-auto "
                    }
                    id="navbar-default"
                >
                    <Link to={"https://www.instagram.com/hysage.id/"} aria-label="ORDER NOW" rel="noopener noreferrer" target="_blank">

                        <button className="invisible font-bold md:visible hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out delay-150 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 px-5 rounded-md text-white py-1">
                            ORDER NOW
                        </button>
                    </Link>
                </div>
            </div>
        </nav >
    );
}
