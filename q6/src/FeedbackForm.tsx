import { useState } from "react";

type FeedbackFormState = {
  name: string;
  email: string;
  rating: number;
  feedback: string;
};

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackFormState>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [submittedData, setSubmittedData] = useState<FeedbackFormState | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      setError("All fields are required.");
      return;
    }
    setSubmittedData(formData);
    setFormData({ name: "", email: "", rating: 0, feedback: "" });
    setError("");
  };

  return (
    <div>
      <h2>Customer Feedback Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Rating (1-5):</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} min={1} max={5} />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div>
          <h3>Thank you for your feedback!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Rating:</strong> {submittedData.rating}</p>
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
        </div>
      )}
    </div>
  );
}
