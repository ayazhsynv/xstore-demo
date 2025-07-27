import Link from "next/dist/client/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Error 404!</h1>
      <h2 className="text-2xl font-bold mt-6">
        The Page You Are Looking For Cannot Be Found
      </h2>
      <div className="mt-4 hover:text-cyan-600 hover:bg-white transition ease-in-out duration-400 bg-cyan-600 text-white px-4 py-2 rounded">
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
