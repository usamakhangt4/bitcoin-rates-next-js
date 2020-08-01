import Link from 'next/link';
const Navbar = () => {
  return (
    <ul className="bg-gray-800 text-white  font-bold text-2xl flex justify-around py-5">
      <li className="hover:underline">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="hover:underline">
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
