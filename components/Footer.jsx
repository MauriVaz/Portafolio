import Location from '../components/Location';
import Message from '../components/Message';
import Email from '../components/Email';
import Link from 'next/link';
import Linkedin from './Linkedin';
import Github from './Github';
const Footer = () => (
  <div className="relative bottom-0 p-2 w-full cursor-pointer border-4 rounded-xl align-middle hover:bg-gray-500 hover:text-white border-gray-500 bg-gray-300">
    <div className="flex flex-row justify-around">
      <div className="flex flex-col ">
        <b className="mb-3">Contacto</b>
        <div className="flex">
          <Location />
          <Link
            href={
              'https://www.google.es/maps/place/Pontevedra/@42.4338911,-8.6568553,14z/data=!3m1!4b1!4m5!3m4!1s0xd2f71cf339da6d7:0x6d5b163a1be431d4!8m2!3d42.4298846!4d-8.6446202?hl=es'
            }>
            Pontevedra,Galicia,España
          </Link>
        </div>
        <div className="flex">
          <Message />
          <Link href={'https://api.whatsapp.com/send?phone=34663317571'}>
            (+34) 663317571
          </Link>
        </div>
        <div className="flex">
          <Email />
          <Link href={'mailto:mvazquezcostal@gmail.com'}>
            mvazquezcostal@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex flex-col ">
        <b className="mb-3">Redes Sociales</b>
        <div className="flex">
          <Linkedin />
          <Link
            href={
              'https://www.linkedin.com/in/mauricio-santiago-v%C3%A1zquez-costal-3099a315b/'
            }>
            LinkedIn
          </Link>
        </div>
        <div className="flex">
          <Github />
          <Link href={'https://github.com/MauriVaz'}>Github</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
