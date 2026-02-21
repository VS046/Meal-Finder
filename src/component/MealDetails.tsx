const MealDetails = ({ meal, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-6 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-2xl font-bold hover:scale-125 transition"
        >
          ✖
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {meal.title}
        </h2>

        <img
          src={meal.image}
          alt={meal.title}
          className="w-full rounded-2xl mb-6 shadow-md"
        />

        <div
          className="text-gray-700 mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: meal.summary }}
        />

        <h3 className="text-2xl font-semibold mb-3 text-orange-600">
          Ingredients
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {meal.extendedIngredients?.map((item) => (
            <li
              key={item.id}
              className="bg-orange-100 px-3 py-2 rounded-lg"
            >
              {item.original}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-3 text-green-600">
          Instructions
        </h3>

        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </div>
    </div>
  );
};

export default MealDetails;