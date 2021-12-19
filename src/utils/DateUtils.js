export async function fetchNow() {
  const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo')
  const json = await response.json()

  return json.datetime
}