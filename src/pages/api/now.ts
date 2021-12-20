import type { NextApiRequest, NextApiResponse } from 'next'

import { FETCH_NOW } from '../../const/API_URI'

type Response = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  fetch(FETCH_NOW)
    .then(response => response.json())
    .then(json => res.status(200).json(json))
}