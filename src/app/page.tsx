import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
        ¡Bienvenido a ATC Dream Match!
      </h1>
      <p className="text-base md:text-lg mb-8 text-gray-700 text-center">
        Crea los equipos de tus sueños y organiza un partido inolvidable.
        ¡Comienza ahora y haz realidad tu visión!
      </p>
      <Link
        href="/teams"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Comenzar a crear equipos
      </Link>
    </div>
  );
};

export default Home;
