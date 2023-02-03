import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <nav className="bg-gray-300 font-bold text-black">
                {/*Este es el menú mobile */}
                <section>
                    <div className='relative md:hidden'>
                        <div className='flex justify-center md:hidden'>
                            <button className="absolute text-indigo-700 top-0 right-0 my-5 mx-5" onClick={() => setOpen(!isOpen)}>
                                {isOpen ? <HiX /> : <HiMenu />}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:hidden items-center justify-around">
                        {isOpen && (
                            <>
                                <Link href="/">
                                    <p
                                        className={`mt-3 p-2 rounded-xl hover:bg-yellow-600 ease-in duration-300`
                                        }>
                                        Home
                                    </p>
                                </Link>

                                <Link href="/projects">
                                    <p
                                        className={`my-3 p-2 rounded-xl hover:bg-yellow-600 ease-in duration-300`
                                        }>
                                        Projects
                                    </p>
                                </Link>
                            </>
                        )}
                    </div>
                </section>
            </nav>
            <nav className="bg-gray-300 font-bold text-black">
                <section>
                    <div className="hidden flex-row md:flex items-center justify-around">
                        <>
                            <div className="my-3 p-2 rounded-xl hover:bg-yellow-600 ease-in duration-300  flex justify-center items-center">
                                <Link href="/">
                                    <p>
                                        Home
                                    </p>
                                </Link>
                            </div>
                            <div className="my-3 p-2 rounded-xl hover:bg-yellow-600 ease-in duration-300  flex justify-center items-center">
                                <Link href="/projects">
                                    <p>
                                        Projects
                                    </p>
                                </Link>
                            </div>
                        </>
                    </div>
                </section>
            </nav>
        </>
    );
};

export default Nav;
