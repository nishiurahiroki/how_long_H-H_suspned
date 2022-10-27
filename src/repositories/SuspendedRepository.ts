import { gql } from '@apollo/client';
import client from '../gql/client';


const SuspendedQuery = gql`
  query {
    suspended {
      date {
        year
        month
        day
      }
    }
  }
`

export default class SuspendedRepository {
  static async get() {
    const result = await client.query({
      query: SuspendedQuery
    })
    return result
  }
}