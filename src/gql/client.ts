
import { ApolloClient, InMemoryCache } from '@apollo/client';

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const client = new ApolloClient({
    uri: process.env.BACKEND_HOST,
    cache: new InMemoryCache(),
});

export default client;