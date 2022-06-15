// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header.js'
import Codegirls from "./components/Main/Codegirls.js";
import Main from "./components/Main/Main.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
    <Routes>
      <Route element={<Main />}>
      <Route path="/" element={<Form />} />
      <Route path="codegirls" element={<Codegirls />} />
      </Route>
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
