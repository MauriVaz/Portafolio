import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import reloj from '../../public/reloj.png';
import calculadora from '../../public/calculadora.png';
import pokedex from '../../public/pokedex.png';
import guess from "../../public/guess.png"
import Scroll from '../components/Scroll';
import Github from '../components/Github';
const Projects = () => {
    return (
        <>
            <Head>
                <title>Proyectos</title>
            </Head>
            <ul className="flex flex-col text-center text-black">
                <li className="p-4 m-4 bg-gray-200 rounded-2xl">
                    <p className="text-center font-bold">
                        <span>Digital clock</span>
                    </p>
                    <div className="text-center flex flex-col md:flex-row p-4 justify-center items-center">
                        <div className="mx-5">
                            <p className='my-6'>
                                A simple clock to show the hour and date in your position
                            </p>
                        </div>
                        <Link
                            href={'https://github.com/MauriVaz/Clock'}>
                            <Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={reloj} alt="reloj" width={480} height={240} />
                        </Link>
                    </div>
                </li>
                <li className="p-4 m-4 bg-gray-200 rounded-2xl">
                    <p className="text-center font-bold">
                        <span>Calculator project</span>
                    </p>
                    <div className="text-center flex flex-col md:flex-row-reverse p-4 justify-center items-center">
                        <div className="mx-5">
                            <p className='mb-4'>
                                A simple project using the basic elements of frontend, HTML, CSS to do a style of Casio Calculator
                                and Javascript to manipulate the DOM, and do the operations, and the buttons of turn on, turn off and
                                reset
                            </p>
                        </div>
                        <Link
                            href={'https://github.com/MauriVaz/Casio-calculator'}>
                            <Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={calculadora} alt="calculadora" width={1440} height={780} />
                        </Link>
                    </div>
                </li>
                <li className="p-4 m-4 bg-gray-200 rounded-2xl">
                    <p className="text-center font-bold">
                        <span>Pokédex project</span>
                    </p>
                    <div className="text-center flex flex-col md:flex-row p-4 justify-center items-center">
                        <div className="mx-5">
                            <p className='my-6'>
                                I Who never think a Pokédex when we are a childs, in these simple pokemon I
                                list all pokemons, usings the pokeapi, when you clicked in a pokemon this showed
                                the information of pokémon, includes the pokemon types, the information of height
                                and weight and the simple stats
                            </p>
                        </div>
                        <Link
                            href={'https://github.com/MauriVaz/Pokedex'}>
                            <Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={pokedex} alt="pokedex" width={1440} height={780} />
                        </Link>
                    </div>
                </li>
                <li className="p-4 m-4 bg-gray-200 rounded-2xl">
                    <p className="text-center font-bold">
                        <span>Guess Pokemon Proyect</span>
                    </p>
                    <div className="text-center flex flex-col md:flex-row-reverse p-4 justify-center items-center">
                        <div className="mx-5">
                            <p className='mb-4'>
                                In these project I used Next Js and the pokeapi to do a simple game inspired
                                in Wordle, in these game you can use a two hints the capital letter of pokemon and the pokemon types
                            </p>
                        </div>
                        <Link
                            href={'https://github.com/MauriVaz/GuessPokemon'}>
                            <Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={guess} alt="guess" width={1440} height={720} />
                        </Link>
                    </div>
                </li>
                <li className="p-4 m-4 bg-gray-200 rounded-2xl">
                    <p className="text-center font-bold">
                        <span>PONG</span>
                    </p>
                    <div className="text-center flex flex-col md:flex-row p-4 justify-center items-center">
                        <div className="mx-5">
                            <p className='my-6'>
                                Todo these project I used HTML, CSS and Javascript, this is a simple game, the
                                winner is the player to do 9 points, the ball is a tennis, basketball or soccer
                                ball, and the background is a tennis, basketball or soccer court
                            </p>
                        </div>
                        <Link
                            href={'https://github.com/MauriVaz/PONG'}>
                            <Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={pokedex} alt="pokedex" width={1440} height={780} />
                        </Link>
                    </div>
                </li>
                <li className="p-4 m-4 bg-gray-200 rounded-2xl">
                    <p className="text-center font-bold">
                        <span>Todo List</span>
                    </p>
                    <div className="text-center flex flex-col md:flex-row-reverse p-4 justify-center items-center">
                        <div className="mx-5">
                            <p className='mb-4'>
                                Mi first project with the Javascript&#39;s
                            </p>
                        </div>
                        <Link
                            href={'https://github.com/MauriVaz/Primer-app-con-Vue'}>
                            <Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={guess} alt="guess" width={1440} height={720} />
                        </Link>
                    </div>
                </li>
            </ul>
        </>
    );
};
<Image className='mt-8 drop-shadow-xl shadow-lg shadow-blue-500/50' src={guess} alt="guess" width={1440} height={780} />

export default Projects;