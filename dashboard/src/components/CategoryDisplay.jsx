import { useSelector } from "react-redux";
import Widgets from "./Widgets";
import Allwidget from "./AllWidgets";


const CategoryDisplay = () => {
  // Access categories from the Redux store using useSelector
  const categories = useSelector((state) => state.categories);

  // Log the categories to the console for debugging purposes
  console.log(categories);
  return (
    <div className="px-4 py-2">
      {/* Dashboard header */}
      <h1 className="font-bold text-xl mb-4">Dashboard</h1>

      {/* Wrapper for the categories */}
      <div id="dashboardCategories" className="p-3">
        {/* Iterate over the categories array */}
        {categories.map((category) => (
          <div key={category.id} className="mb-4">
            {/* Display the category name */}
            <h3 className="text-lg font-bold mb-2">{category.name}</h3>

            {/* Render Widgets component with categoryId and widgets */}
            <Widgets categoryId={category.id} widgets={category.widgets} />
          </div>
        ))}
      </div>

      {/* Render Allwidget component */}
    <Allwidget/>
    </div>
  );
};

export default CategoryDisplay;
