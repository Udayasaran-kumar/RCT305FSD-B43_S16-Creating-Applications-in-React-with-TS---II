import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";

export default function FeedbackForm() {
  const { formData, setFormData } = useFeedback();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "rating" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      setError("All fields are required.");
      return;
    }
    setError("");
    navigate("/summary");
  };

  return (
    <div>
      <h2>Customer Feedback Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} min={1} max={5} placeholder="Rating" />
        <textarea name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Feedback" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
