import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { addWidget } from "../redux/widget/widgetSlice"; // Import the action to add a widget

const Sidebar = ({ showSidebar, setShowSidebar, categoryId }) => {
  const categories = useSelector((state) => state.categories); // Assuming the state is named `widget`
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(categoryId);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = (e) => {
    e.preventDefault();

    if (selectedCategory && widgetName && widgetText) {
      setShowSidebar(false);
      dispatch(
        addWidget({
          categoryId: selectedCategory,
          newWidget: { id: Date.now(), name: widgetName, text: widgetText },
        })
      );
      // Clear the form fields
      setWidgetName("");
      setWidgetText("");
      setSelectedCategory("");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[30vw] bg-gray-100 shadow-lg h-full z-50 transform transition-transform duration-500 ease-in-out ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Sidebar content */}
      <div className="flex flex-col gap-2">
        <div className="p-4 bg-gray-700 flex justify-between items-center">
          <h2 className="text-white font-semibold">Add Widget</h2>
          <button onClick={() => setShowSidebar(false)} className="text-white">
            <FaTimes />
          </button>
        </div>
        <div className="p-4">
          <form onSubmit={handleAddWidget}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Select Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Widget Name:
              </label>
              <input
                type="text"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter widget name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Widget Text:
              </label>
              <textarea
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter widget text"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white rounded-md p-2 w-full hover:bg-gray-600 transition-colors"
            >
              Add Widget
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
