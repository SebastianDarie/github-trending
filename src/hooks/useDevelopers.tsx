import ky from "ky-universal";
import { useQuery } from "react-query";
import { Developer } from "../types/data-types";

const getDevelopers = async () => {
  const data = await ky
    .get("https://gh-trending-api.herokuapp.com/developers", {
      credentials: "include",
    })
    .json<Developer[]>();
  return data;
};

const useDevelopers = () => {
  return useQuery<Developer[]>(["developers"], () => getDevelopers());
};

export default useDevelopers;
