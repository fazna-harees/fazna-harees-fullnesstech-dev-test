import axios from "axios";
import { useQuery } from "react-query";
import { categoryToQuery } from "../utils/constants";

const getData = async (page) => {
  const { data } = await axios.get(`/v2/home-loans?page=${page}`, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  return data;
};

const getCategoryLoans = async (category) => {
  const categoryData = [];
  var page = 1;
  while (categoryData.length < 10) {
    const data = await getData(page);
    page++;
    const filteredData =
      category === "fixedrate"
        ? data.hits.filter((item) => item.rateType.includes("Fixed"))
        : data.hits.filter(
            (item) =>
              item[categoryToQuery[category].key] ===
              categoryToQuery[category].value
          );
    categoryData.push(...filteredData);
  }
  return categoryData;
};
export default function useCategoryLoans(category) {
  return useQuery(["category", category], () => getCategoryLoans(category));
}
