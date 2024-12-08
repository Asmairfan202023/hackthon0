import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar">
    <header>
      <Image 
        src="/logo.jpg" // Path relative to the `public` folder
        alt="Company Logo"
        width={150}     // Desired width
        height={50}     // Desired height
      />
    </header>

        <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart />

        </div>


      </div>
    </>
  );
}