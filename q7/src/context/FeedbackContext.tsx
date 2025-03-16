import { createContext, useContext, useState, ReactNode } from "react";

type FeedbackState = {
  name: string;
  email: string;
  rating: number;
  feedback: string;
};

type FeedbackContextType = {
  formData: FeedbackState;
  setFormData: (data: FeedbackState) => void;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FeedbackState>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  return (
    <FeedbackContext.Provider value={{ formData, setFormData }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error("useFeedback must be used within a FeedbackProvider");
  return context;
};
