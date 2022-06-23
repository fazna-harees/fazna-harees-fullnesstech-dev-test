import axios from "axios";
import { useQuery } from "react-query";

const getLoans = async () => {
  const { data } = await axios.get("/v2/home-loans", {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  return data.hits;
};
export default function useLoans() {
  return useQuery(["loans"], () => getLoans());
}
