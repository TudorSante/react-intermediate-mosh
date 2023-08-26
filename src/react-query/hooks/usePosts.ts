import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  /* _start param is used here to query from x-y posts, and retrieve
  _limit posts from the backend. */
  const queryPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  /* everytime our query changes, react will automatically fetch the
   data from the backend. Set keepPreviousData to true to keep the
   previous data when fetching based on a new query key. Defaults to false.
  */
  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: queryPosts,
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default usePosts;
