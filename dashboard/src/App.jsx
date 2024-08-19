import CategoryDisplay from "./components/CategoryDisplay";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-slate-200">
      <Header />
      <div className="p-5 h-full w-full">
        <CategoryDisplay />
      </div>
    </div>
  );
};

export default App;
