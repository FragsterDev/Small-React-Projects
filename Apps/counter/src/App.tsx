import { Routes, Route, Link } from "react-router-dom";
import CounterApp from "./Counter/CounterApp";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mini React Projects</h1>
      <p>Click on a project above to get started 🚀</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="p-8">
      <nav className="flex gap-4 mb-8">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/counter" className="text-blue-600 hover:underline">Counter</Link>
        <Link to="/todo" className="text-blue-600 hover:underline">Todo</Link>
        {/* Add more links as projects grow */}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterApp />} />
        {/* <Route path="/todo" element={<TodoApp />} /> */}
      </Routes>
    </div>
  );
};

export default App;
