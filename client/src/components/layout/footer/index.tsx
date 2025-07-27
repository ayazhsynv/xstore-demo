import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white mx-6 mb-6 px-32 pt-28 pb-8 flex flex-col not-lg:mx-0 not-lg:px-6 not-lg:mb-0">
      <div className="pb-10 gap-4 flex flex-row flex-wrap justify-between items-start">
        <div className="flex flex-col gap-10 text-grey max-w-92">
          <Image src="/images/logo-w.png" alt="Logo" width={220} height={74} />
          <div className="flex flex-col gap-8">
            <div className="flex items-center">
              <Image
                className="invert"
                src="/icons/phone.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="ml-2">+1 2222 33 444 55</span>
            </div>
            <div className="flex items-center">
              <Image
                className="invert"
                src="/icons/email.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="ml-2">info@ITcompany.com</span>
            </div>
            <div className="flex items-center">
              <Image
                className="invert"
                src="/icons/map.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="ml-2">
                123 Tech Avenue, Suite 100, City, State, ZIP Code
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              className=" bg-white p-2"
              src="/icons/facebook.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
            <Image
              className=" bg-white p-2"
              src="/icons/twitter.svg"
              alt="Twitter"
              width={40}
              height={40}
            />
            <Image
              className=" bg-white p-2"
              src="/icons/youtube.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="flex flex-col max-w-40">
          <div className="pb-8">
            <div className="h-0.5 w-19 bg-white"></div>
          </div>
          <div className="text-3xl font-normal mb-16">Quick Link</div>
          <div className="flex flex-col gap-4 text-lg">
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Home
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Shop
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Category
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Contact
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} About
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-40">
          <div className="pb-8">
            <div className="h-0.5 w-19 bg-white"></div>
          </div>
          <div className="text-3xl font-normal mb-16">Customer</div>
          <div className="flex flex-col gap-4 text-lg">
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Product Guides
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Wishlists
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition ease-in-out duration-300"
            >
              {">"} Store Locator
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pb-8">
            <div className="h-0.5 w-19 bg-white"></div>
          </div>
          <div className="text-3xl font-normal mb-16">Newsletter</div>
          <div className="flex flex-col gap-4 text-lg">
            <span>Stay updated with latest news.</span>
            <div className="flex not-lg:flex-col not-lg:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 bg-dark-grey outline-none text-white text-lg min-w-68 not-lg:min-w-0 placeholder:text-grey"
              />
              <button className="bg-dark-grey cursor-pointer text-white text-sm p-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-t-border pt-2.5 flex flex-wrap justify-between items-center">
        <div className="p-2.5 ">
          Copyright © XStore theme. Created by 8theme - WordPress WooCommerce
          themes.
        </div>
        <div className="p-2.5">
          <Image
            src="/images/payment.svg"
            alt="Payment"
            width={270}
            height={27}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
