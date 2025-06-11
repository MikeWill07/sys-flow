import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { nhost } from "./nhost";

const httpLink = createHttpLink({
  uri: nhost.graphql.httpUrl,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await nhost.auth.getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
