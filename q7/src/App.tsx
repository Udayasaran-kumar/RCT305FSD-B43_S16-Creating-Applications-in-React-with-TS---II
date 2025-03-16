import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackSummary from "./components/FeedbackSummary";
import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/summary" element={<FeedbackSummary />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}
