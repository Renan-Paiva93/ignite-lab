import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogrrs401i701xtdgwd4x0l/master',
    cache: new InMemoryCache() 
})