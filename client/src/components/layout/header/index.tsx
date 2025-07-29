import Link from "next/dist/client/link";
import Nav from "./nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 left-0 w-full z-50">
      {/* Desktop Header */}
      <div className="flex px-36 justify-between items-center h-22 border-b-1 border-b-border not-lg:hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={155} height={51} />
        </Link>

        {/* Navigation Links */}
        <Nav />

        {/* Action Icons */}
        <div className="flex space-x-4">
          <button className="cursor-pointer">
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </button>

          <Link href="/profile" className="flex items-center">
            <Image src="/icons/user.svg" alt="User" width={24} height={24} />
          </Link>

          <button className="cursor-pointer">
            <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-6 border-b-1 border-b-border">
        {/* Menu Icon */}
        <Image
          src="/icons/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center py-4">
          <Image src="/images/logo.png" alt="Logo" width={155} height={51} />
        </Link>

        {/* Cart Icon */}
        <button className="cursor-pointer">
          <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
        </button>
      </div>
    </header>
  );
};
export default Header;
