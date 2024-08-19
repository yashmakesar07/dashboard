
import { useSelector } from "react-redux";

const Allwidget = () => {
  // Access categories from the Redux store using useSelector
  const categories = useSelector((state) => state.categories);

  return ( 
    <div className="mt-8">
      {/* Header for the All Widgets section */}
      <h2 className="text-xl font-bold mb-4">All Widgets</h2>
        
      {/* Grid layout for displaying widgets */}
      <div className="grid p-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Loop through each category */}
        {categories.map((category) => 
          // Loop through each widget in the current category
          category.widgets.map((widget) => (
            <div
              key={widget.id}
              className="p-4 border relative bg-slate-300 rounded-md shadow-sm"
            >
              {/* Display the widget name */}
              <h4 className="text-md font-semibold">{widget.name}</h4>
              
              {/* (Optional) Close icon if you want to add delete functionality */}
              {/* <button
                className="absolute top-2 right-2 text-white p-0.5 rounded-md hover:bg-black"
                // onClick={() => handleDeleteWidget(widget.id)}
              >
                <FaTimes />
              </button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Allwidget;
