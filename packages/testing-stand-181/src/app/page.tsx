export default function Landing() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Welcome to your new landing page
        </p>
        <button className="px-8 py-4 bg-indigo-500 text-white text-lg font-semibold rounded-lg hover:bg-indigo-600 transition-colors shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}


