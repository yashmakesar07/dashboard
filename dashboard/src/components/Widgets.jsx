import { FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/widget/widgetSlice";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Widgets = ({ categoryId, widgets }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteWidget = (widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId })); // Pass both categoryId and widgetId
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      id="widgets"
      className="grid relative  grid-cols-2 sm:grid-cols-3 gap-6 p-5"
    >
      {/* Iterate over the widgets array */}
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className="p-4 border relative bg-slate-300 rounded-md shadow-sm"
        >
          <button
            onClick={() => handleDeleteWidget(widget.id)}
            className="absolute top-2 right-2 text-white p-0.5 rounded-md hover:bg-red-500"
          >
            <FaTimes  className=" hover:text-red-50"/>
          </button>
          {/* Display the widget name */}
          <h4 className="text-md font-semibold">{widget.name}</h4>
          <div className=" mt-2">
            <h2> {widget.text}</h2>
          </div>
        </div>
      ))}

      {/* Empty column with a + sign for adding a new widget */}
      <div className="flex items-center justify-center p-4 border bg-gray-100 rounded-md shadow-sm cursor-pointer">
        <button onClick={handleSidebar}>
          <FaPlus className="text-2xl text-gray-600" />
        </button>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Widgets;
