import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import reloj from '../public/reloj.png';
import calculadora from '../public/calculadora.png';
import Scroll from '../components/Scroll';
import Github from '../components/Github';
const Projects = () => {
  return (
    <>
      <Head>
        <title>Proyectos</title>
      </Head>
      <ul className="flex flex-col text-center">
        <li className="p-4 m-4 bg-gray-200 rounded-2xl">
          <div className="text-center flex flex-row p-3 justify-around">
            <div className="mx-5">
              <Link href={'https://maurivaz.github.io/Clock/'}>
                <p className="bg-gray-300 hover:bg-gray-400 rounded-xl p-2 cursor-pointer w-fit">
                  <span>Proyecto Reloj Digital</span>
                </p>
              </Link>
              <p>
                Proyecto hecho usando las tecnologías básicas Javascript, HTML y
                CSS
              </p>
              <div>
                <Link href={'https://github.com/MauriVaz/Clock'}>
                  <p className="bg-gray-300 hover:bg-gray-400 rounded-xl p-2 cursor-pointer w-fit">
                    <span>
                      <Github />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <Image src={reloj} alt="reloj" width={360} height={240} />
          </div>
        </li>
        <li className="p-4 m-4 bg-gray-200 rounded-2xl">
          <div className="text-start flex flex-row p-3 justify-around">
            <Image
              src={calculadora}
              alt="calculadora"
              width={360}
              height={240}
            />
            <div className="mx-5">
              <Link href={'https://maurivaz.github.io/Casio-calculator/'}>
                <p className="bg-gray-300 hover:bg-gray-400 rounded-xl p-2 cursor-pointer w-fit">
                  <span>Proyecto Calculadora</span>
                </p>
              </Link>
              <p>
                Proyecto simple, simulando una calculadora casio, cuenta con
                todos los botones funcionales, usando Javascript para manipular
                el DOM y realizar todas las operaciones aritméticas básicas
              </p>
              <div>
                <Link href={'https://github.com/MauriVaz/Casio-calculator'}>
                  <p className="bg-gray-300 hover:bg-gray-400 rounded-xl p-2 cursor-pointer w-fit">
                    <span>
                      <Github />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <Scroll />
      </div>
    </>
  );
};

export default Projects;
