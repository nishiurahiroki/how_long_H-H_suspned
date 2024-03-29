
import { createClient } from 'urql';

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_HOST,
  suspense: true
});

export default client;