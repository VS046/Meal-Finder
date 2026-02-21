const Header = ({ searchTerm, setSearchTerm, searchMeal }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-16 shadow-xl">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          🍛 Indian Veg Explorer
        </h1>
        <p className="mb-8 text-lg opacity-90">
          Discover delicious vegetarian Indian recipes ✨
        </p>

        <div className="flex justify-center gap-3 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search paneer, dal, rice..."
            className="flex-1 px-4 py-3 rounded-full text-black shadow-lg focus:outline border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={searchMeal}
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;