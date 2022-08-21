import Link from 'next/link';

const Menu = () => (
  <>
    <div className="p-5 bg-gradient-to-r from-gray-200 to-cyan-500">
      <ul className="flex flex-row align-middle justify-around text-black font-bold">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/projects'}>Proyectos</Link>
        </li>
      </ul>
    </div>
  </>
);
export default Menu;
