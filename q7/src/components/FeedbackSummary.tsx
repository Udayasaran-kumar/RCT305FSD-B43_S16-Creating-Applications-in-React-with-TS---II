import { useFeedback } from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

export default function FeedbackSummary() {
  const { formData } = useFeedback();
  const navigate = useNavigate();

  if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
    return (
      <div>
        <p>No feedback submitted. Please fill out the form first.</p>
        <button onClick={() => navigate("/")}>Go to Form</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Rating:</strong> {formData.rating}</p>
      <p><strong>Feedback:</strong> {formData.feedback}</p>
      <button onClick={() => navigate("/")}>Submit Another Feedback</button>
    </div>
  );
}
