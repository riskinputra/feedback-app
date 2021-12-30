import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import { createContext, useState, useEffect } from "react";

Axios.defaults.headers.post['Content-Type'] = "application/json";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const { data } = await Axios.get(`/feedback?_sort=id&_order=desc`);

      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addFeedback = async (newFeedback) => {
    const { data } = await Axios.post('/feedback', newFeedback)
    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want ro delete?")) {
      await Axios.delete(`/feedback/${id}`)
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = async (id, updItem) => {
    const { data } = await Axios.patch(`/feedback/${id}`, updItem)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
