const MealCard = ({ meal, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden transform hover:-translate-y-2 transition duration-300"
    >
      <div className="relative">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">
          {meal.title}
        </h3>
      </div>
    </div>
  );
};

export default MealCard;