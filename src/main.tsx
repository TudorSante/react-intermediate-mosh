import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

/* we can always change the default query params through the config param
defaultOptions - queries. retry - indicates the nr of retries react does
if the query failed the first time. cacheTime: if for the given nr of ms
the query has no observer (no component is using that query), that query
is considered inactive => removed from the cache after cacheTime (garbage
collection). staleTime - after how many secs the data is considered not
fresh. When the network is reconnected, a component is mounted or the 
window is refocused, react query will automatically refresh the data.
Note: here we have redefined the query settings globally - for all queries
but in practice we should change the settings only locally, for each 
separate query obj when defining the query hook.
*/
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, // ms => 5min
//       staleTime: 10 * 1000, // 10 secs
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//       refetchOnMount: true,
//     },
//   },
// });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
