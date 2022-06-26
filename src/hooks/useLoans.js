import axios from "axios";
import { useQuery } from "react-query";
import { getLeastProductRate, getSecondLeastadvertisedRate } from "../utils/helpers";


const getLoans = async () => {
  const { data } = await axios.get("/v2/home-loans", {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  const { hits } = data;
  return getSecondLeastadvertisedRate(hits)  // Use this for SECOND LEAST value
  // return getLeastProductRate(hits)  // THIS for LEAST Value.
  // return data.hits; // this for All values.
};
export default function useLoans() {
  return useQuery(["loans"], () => getLoans());
}
