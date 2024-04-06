//import { Route, Routes } from "react-router-dom";
import "./App.css";
import UploadGame from "./components/UploadGame";

function App() {
  return (
    <div>
      <UploadGame />
    </div>
  );
}

export default App;

/**
 * <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add_mood" element={<MoodDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
 */

/**
 * 
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
 */
