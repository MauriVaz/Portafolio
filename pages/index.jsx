import Head from 'next/head';
import Image from 'next/image';
import CSS from '../components/CSS';
import Docker from '../components/Docker';
import HTML from '../components/HTML';
import Javascript from '../components/Javascript';
import Next from '../components/NextJs';
import Node from '../components/NodeJs';
import Tailwind from '../components/Tailwind';
import Typescript from '../components/Typescript';
import foto from '../public/foto.jpg';
const index = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <h1 className="text-red-400 text-center mt-5 mb-5">
      <b className="animate-pulse">
        Portafolio de Mauricio Santiago Vázquez Costal
      </b>
    </h1>
    <section className="flex flex-row m-5 p-5 hover:cursor-pointer hover:bg-cyan-100 overflow-hidden shadow-lg">
      <picture className="rounded-xl">
        <Image
          src={foto}
          alt="foto"
          width={240}
          height={240}
          className="rounded-3xl"
        />
      </picture>
      <div className="mx-5">
        <p>
          <b>
            FullStack developer junior en busca de su primer empleo como
            desarrollador
          </b>
        </p>
        <p className="my-5">Aptitudes:</p>
        <ul className="flex justify-between">
          <li>
            <Node />
          </li>
          <li>
            <Javascript />
          </li>
          <li>
            <Typescript />
          </li>
          <li>
            <HTML />
          </li>
          <li>
            <CSS />
          </li>
          <li>
            <Docker />
          </li>
          <li>
            <Next />
          </li>
          <li>
            <Tailwind />
          </li>
        </ul>
      </div>
    </section>
  </>
);
export default index;
