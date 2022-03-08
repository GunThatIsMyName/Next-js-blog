import Image from "next/image";
import Link from "next/link";
import { navbarList } from "../utils/help";

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
        {navbarList.map(item=>{
          return <Link key={item.id} href={item.link}>{item.name}</Link>
        })}
      </div>
    </nav>
  );
};

export default Navbar;
