import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  /* To query for a specific userId posts, use the 2nd param of the
  get fcn - the config param, and inside the params obj add the field
  you are interested in querying. */
  const queryPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId,
        },
      })
      .then((res) => res.data);

  /* api end point for fetching user posts: /users/1/posts. thus we
  follow a hierarchical key description -> the data we are querying
  gets more specific the deeper it becomes. 
  userId is a param to this query - everytime this value changes 
  react query should fetch the posts for that user from the backend.
  This is very similar to the dependency array of effect hook.
  */
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: queryPosts,
    staleTime: 1 * 60 * 1000,
  });
};

export default usePosts;
