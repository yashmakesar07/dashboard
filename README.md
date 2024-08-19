# Dynamic Dashboard Widget Management

## Live Demo
[View the Live Demo](https://dashboard-zeta-livid-55.vercel.app/)

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
- The dashboard and widget structure is defined using JSON, allowing for flexible and dynamic creation of categories and widgets.

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
```
# Installation and Setup on Local System
To run the project on your local system, follow these steps:
### 1. To run on local system clone this repo
```
git clone https://github.com/yashmakesar07/dashboard.git
```
### 2. Install Dependencies
- Ensure that Node.js and npm (or Yarn) are installed on your system. Then, install the project dependencies:
```
cd dashboard
npm install
```
### 3. Run the Application in Development Mode
- Start the Vite development server to run the application locally:
```
npm run dev
```
- This command will start the application and you can access it at http://localhost:5173 in your web browser.

### 4. Build the Application for Production
- To create a production build of the application, run:
```
npm run build
```
This command will generate optimized static files in the dist directory, which can be served by any static file server.

### 5. Preview the Production Build (Optional)
- If you'd like to preview the production build locally, you can run:
npm run preview
This will serve the contents of the dist directory so you can view the production build locally.

### 6. Deployment
- To deploy the application, follow the deployment instructions specific to your hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## How to Use
### Adding a Widget:

- Click on the +Add Widget button within a category.
Fill in the widget name and text, then click Add.
### Removing a Widget:

- Click the cross icon (x) on the widget you want to remove.
Alternatively, uncheck the widget from the category list.
Searching for Widgets:

### Use the search bar to filter and find widgets by name.
