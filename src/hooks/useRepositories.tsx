import ky from "ky-universal";
import { useQuery } from "react-query";
import { Repo } from "../types/data-types";

const getRepositories = async () => {
  const data = await ky
    .get("https://gh-trending-api.herokuapp.com/repositories", {
      credentials: "include",
    })
    .json<Repo[]>();
  return data;
};

const useRepositories = () => {
  return useQuery<Repo[]>(["repositories"], () => getRepositories());
};

export default useRepositories;
