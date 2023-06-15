import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildCV from "./pages/BuildCV";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BuildCV />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
