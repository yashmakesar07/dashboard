import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

// Initial state loaded from data.json
const initialState = data;

// Create the slice
const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    // Reducer to add a new widget to a specific category
    addWidget: (state, action) => {
      const { categoryId, newWidget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(newWidget);
      }
    },

    
    // Reducer to remove a widget by its ID from a specific category
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    
    // Reducer to search for widgets by name
    searchWidget: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.categories.forEach(category => {
        category.widgets = category.widgets.filter(widget =>
          widget.name.toLowerCase().includes(searchTerm)
        );
      });
    },
    resetWidgets: () => initialState
  }
});

// Export the actions generated by createSlice
export const { addWidget, removeWidget, searchWidget,resetWidgets } = widgetSlice.actions;

// Export the reducer as the default export
export default widgetSlice.reducer;
