import Head from 'next/head'
import Image from 'next/image'
import foto from "../../public/foto.jpg"
import Whatsapp from '@/components/Whatsapp'
import Link from 'next/link'
import Gmail from '@/components/Gmail'
import TextAnimation from '@/components/Prueba'

const Home = () => {
  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Portafolio web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='mx-5'>
          <div className='flex flex-col justify-center items-center text-gris'>
            <h1 className='font-bold text-center text-2xl mt-7'>Hello, my name is Mauricio Santiago Vázquez Costal</h1>
            <div className='p-4 relative'>
              <p>I am a Junior Fullstack developer and UX/UI Designer</p>
              <p>I suggest you see my works in the projects section</p>
              <p className='text-center text-xl'>I currently know these technologies</p>
              <TextAnimation />
            </div>
            <h2 className='font-bold text-2xl'>You can contact me in these links</h2>
            <ul className='flex flex-row justify-around items-center'>
              <li>
                <Link href={"https://wa.me/+34663317571"} >
                  <Whatsapp />
                </Link>
              </li>
              <li>
                <Link href={"mailto:mvazquezcostal@gmail.com"}>
                  <Gmail />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mb-32 items-center flex justify-center'>
          <Image className='rounded-3xl' alt="foto" src={foto} width={240} height={240} />
        </div>
      </main>
    </>
  )
}

export default Home
