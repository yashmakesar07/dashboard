# Dynamic Dashboard Widget Management

## Live Demo
[View the Live Demo]((https://dashboard-zeta-livid-55.vercel.app/))

## Project Overview
This project is a dynamic dashboard page where users can add, remove, and manage widgets within specific categories. Each widget can contain random text for assignment purposes. The application is built using React with Redux Toolkit for state management and styled with Tailwind CSS. The project setup was initiated using Vite for a fast and optimized development experience.

## Features
- **Dynamic Category and Widget Management:** Users can dynamically add and remove widgets within specific categories.
- **Add Widgets:** Users can add widgets by providing a name and text content.
- **Remove Widgets:** Widgets can be removed either via the widget's cross icon or by unchecking them from the category list.
- **Search Functionality:** Users can search through a list of all available widgets.
- **State Management:** The application uses Redux Toolkit to manage the addition and removal of widgets locally.
- **Styling:** Tailwind CSS is used for efficient and responsive styling.

## JSON Structure
The dashboard and widget structure is defined using JSON, allowing for flexible and dynamic creation of categories and widgets.

```json
{
  "categories": [
    {
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "name": "Widget 1",
          "text": "Random text 1"
        },
        {
          "name": "Widget 2",
          "text": "Random text 2"
        }
      ]
    }
  ]
}
