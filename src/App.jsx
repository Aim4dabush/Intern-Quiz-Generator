import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <nav></nav>
      <main className="vh-100">
        <Outlet />
      </main>
    </>
  );
}

export default App;
