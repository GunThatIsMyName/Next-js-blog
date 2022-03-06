import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div>
          <h1>Cool</h1>
          <Image
            src="/images/air.jpeg"
            width={150}
            height={150}
            alt="Air-jorean"
          />
        </div>
        <Link href="/">HOME</Link>
        <Link href="/about">About</Link>
        <Link href="/list">List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
