import { useState } from "react";

export default function Navbar() {
    const [isNavbarVisible, setNavbarVisibility] = useState(false);
    const toggleNavbar = () => {
        setNavbarVisibility(!isNavbarVisible);
    };
    const dataNavbar = [{ name: 'Home', link: "" }, { name: 'About', link: "" }, { name: 'Contact', link: "" },];

    return (
        <nav className="bg-white border-gray-200 dark:bg-blue-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hysage</span>
                </a>
                <button onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={isNavbarVisible ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-blue-600 dark:border-gray-700">
                        {dataNavbar.map((data, index) => {
                            return (
                                <li key={index}>
                                    <a href={data.link} className="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{data.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )

}