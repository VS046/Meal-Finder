import { useEffect, useState } from "react";
import Header from "./component/Header";
import MealCard from "./component/MealCard";
import MealDetails from "./component/MealDetails";

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

function App() {
  const [meals, setMeals] = useState<any[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const limit = 20;

  useEffect(() => {
    fetchMeals();
  }, [page]);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm || ""}&cuisine=indian&diet=vegetarian&number=${limit}&offset=${page}&apiKey=${API_KEY}`
      );

      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError("No Indian Vegetarian dishes found.");
        setMeals([]);
      } else {
        setMeals(data.results);
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(0);
    fetchMeals();
  };

  // 🔥 Fetch Full Recipe Details
  const fetchMealDetails = async (id: number) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
      );

      const data = await res.json();
      setSelectedMeal(data);
    } catch (err) {
      setError("Failed to load recipe details.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-linear-to-br from-orange-100 via-rose-500 to-yellow-300">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMeal={handleSearch}
      />

      <div className="max-w-7xl mx-auto p-6">

        {loading && (
          <div className="text-center text-xl font-semibold">
            Loading...
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 font-semibold">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onClick={() => fetchMealDetails(meal.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setPage(page - limit)}
            disabled={page === 0}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            onClick={() => setPage(page + limit)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>

      {selectedMeal && (
        <MealDetails
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
}

export default App;