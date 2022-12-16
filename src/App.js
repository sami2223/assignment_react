import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Survey from "./components/Survey";
import Settings from "./components/Settings";
import EmailSent from "./components/EmailSent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/email-sent" element={<EmailSent />} />
      </Routes>
    </div>
  );
}

export default App;
