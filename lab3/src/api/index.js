import axios from "axios";
export const useApi = () => {
  const postText = async (text) => {
    const response = await axios.post("http://localhost:1234", { text });
    return response;
  };

  const getText = async () => {
    const text = await axios.get("http://localhost:1234");
    return text.data.text;
  };
  return { postText, getText };
};
