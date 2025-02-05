export default function Products() {
  return (
    <div className="bg-gray-100 py-60 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Discover Our Exclusive Products
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Browse through our collection of high-quality products tailored for you.
      </p>
      <div className="mt-6">
        <button className="bg-indigo-600 inline-block text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
          View Products
        </button>
      </div>
    </div>
  );
}
