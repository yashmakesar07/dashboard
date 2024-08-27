import { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { searchWidget, resetWidgets } from '../redux/widget/widgetSlice'; // Import the searchWidget and resetWidgets actions
import Sidebar from './Sidebar'; // Import Sidebar component

const Header = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State to track the search term
  const [showSidebar, setShowSidebar] = useState(false); // State to track sidebar visibility
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update the search term state

    if (value.trim() === '') {
      // If the search term is empty, reset the widget list
      dispatch(resetWidgets());
    } else {
      // Otherwise, filter the widgets based on the search term
      dispatch(searchWidget(value));
    }
  };

  const handleAdd = () => {
    setShowSidebar(!showSidebar); // Toggle the sidebar visibility
  };

  return (
    <div className="bg-gray-800 flex gap-16 flex-row relative justify-between px-10 items-center h-[10vh] p-4">
      {/* Breadcrumb Navigation */}
      <div>
        <nav className="text-sm flex items-center space-x-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <span className='text-gray-300'>&gt;</span>
          <a href="#" className="text-gray-300 hover:text-white">
            Dashboard
          </a>
        </nav>
      </div>

      {/* Search Input */}
      <div className="relative w-[50%]">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch} // Call handleSearch on input change
          placeholder="Search Anything..."
          className="border h-[40px] w-full border-gray-500 rounded-md pl-10 pr-4 text-base bg-gray-100 text-gray-800 shadow-sm focus:border-gray-600 focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-gray-600" />
        </div>
      </div>

      {/* Add Widget Button */}
      <div className="h-[40px] relative flex items-center justify-end p-4">
       <button
  className="flex items-center justify-center p-2 bg-gray-700 text-white rounded-md md:mx-0 mx-auto mt-4 md:mt-0"
>
  <FaPlus className="mr-2" /> Add Widget
</button>
      </div>

      {/* Sidebar Component */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  )
}

export default Header