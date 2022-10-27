import { FETCH_NOW } from '../const/API_URI'

export async function fetchNow() : Promise<string>{
  const response = await fetch(FETCH_NOW)
  const json = await response.json()

  return json.datetime
}