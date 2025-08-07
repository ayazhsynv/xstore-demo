import PageHeading from "@/components/Common/PageHeading";
import Link from "next/dist/client/link";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col">
      <PageHeading
        title="Contact Us"
        description="We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Your thoughts and inquiries are important to us, and we're here to help in any way we can."
      />
      <div className="page-container mt-8">
        <div className="flex flex-row flex-wrap justify-between items-center text-white">
          <div className="basis-1/3 not-lg:basis-full p-4">
            <div className="bg-black p-16 not-md:p-8 flex flex-col justify-center items-center font-light">
              <Image
                src="/icons/email.svg"
                alt="Email Icon"
                width={32}
                height={32}
                className="invert mb-4"
              />
              <h3 className="text-3xl not-sm:text-xl mb-8">Email:</h3>
              <Link
                href="mailto:xstore@company.com"
                className="text-lg not-md:text-sm mb-2"
              >
                xstore@company.com
              </Link>
              <Link
                href={"mailto:track@company.com"}
                className="text-lg not-md:text-sm mb-2"
              >
                track@company.com
              </Link>
            </div>
          </div>
          <div className="basis-1/3 not-lg:basis-full p-4">
            <div className="bg-black p-16 not-md:p-8 flex flex-col justify-center items-center">
              <Image
                src="/icons/phone.svg"
                alt="Phone Icon"
                width={32}
                height={32}
                className="invert mb-4"
              />
              <h3 className="text-3xl not-md:text-xl mb-8">Call:</h3>
              <Link
                href="phone:+1234567890"
                className="text-lg not-md:text-sm mb-2"
              >
                +123-456-7890
              </Link>
              <Link
                href={"phone:+1234567890"}
                className="text-lg not-md:text-sm mb-2"
              >
                +123-456-7890
              </Link>
            </div>
          </div>
          <div className="basis-1/3 not-lg:basis-full p-4">
            <div className="bg-black p-16 not-md:p-8 flex flex-col justify-center items-center">
              <Image
                src="/icons/map.svg"
                alt="Map Icon"
                width={32}
                height={32}
                className="invert mb-4"
              />
              <h3 className="text-3xl not-md:text-xl mb-8">Address:</h3>
              <Link
                href="https://www.google.com/maps/place/123+Main+St,+City,+Country"
                className="text-lg not-md:text-sm mb-2"
              >
                123 Main St, City, Country
              </Link>
              <Link
                href={
                  "https://www.google.com/maps/place/456+Elm+St,+City,+Country"
                }
                className="text-lg not-md:text-sm mb-2"
              >
                456 Elm St, City, Country
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:h-96 md:h-80 sm:h-64 h-48">
          <Image
            src="/images/contact-map.png"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>
        <div className="sections-margin w-full flex flex-col">
          <div className="w-32 h-0.5 bg-black mb-4"></div>
          <h2 className="text-4xl font-medium mb-4 capitalize">
            please get in touch
          </h2>
          <p className="text-gray-600 font-light mb-16">
            For assistance with your orders, account, or any technical issues,
            our customer support team is here to help
          </p>
          <form
            action="/api/contact"
            method="post"
            className="flex flex-col mb-50 not-lg:mb-20"
          >
            <div className="flex flex-wrap">
              <div className="flex flex-col basis-1/2 not-md:basis-full pr-4 not-md:mb-4 not-md:pr-0">
                <label className="text-md font-light text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border border-gray-300 basis-1/2 outline-none"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex flex-col basis-1/2 not-md:basis-full pl-4 not-md:mb-4 not-md:pl-0">
                <label className="text-md font-light text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 basis-1/2 outline-none"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <label
              htmlFor="message"
              className="text-md font-light text-gray-600 mb-2 mt-8"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 basis-full outline-none"
              placeholder=""
            ></textarea>
            <button
              type="submit"
              className="mt-8 text-black border border-black py-6 px-9 max-w-50 cursor-pointer"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
