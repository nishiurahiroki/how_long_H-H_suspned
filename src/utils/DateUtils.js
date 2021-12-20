import { FETCH_NOW } from '../const/API_URI'

export async function fetchNow() {
  const response = await fetch(FETCH_NOW)
  const json = await response.json()

  return json.datetime
}