import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_PATH } from "./Routes/Routes";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {ROUTE_PATH.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              Component={route?.component}
            />
          ))}
        </Routes>
        <Whatsapp />
      </Router>
    </>
  );
}

export default App;
