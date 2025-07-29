import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <ul className="flex space-x-4">
        <li className="py-7 mx-6">
          <Link href="/">Home</Link>
        </li>
        <li className="py-7 mx-6">
          <Link href="/shop">Products</Link>
        </li>
        <li className="py-7 mx-6">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="py-7 mx-6">
          <Link href="/about">About</Link>
        </li>
        <li className="py-7 mx-6">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
