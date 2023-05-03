// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  awemeList: object[]
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  const url = 'https://tiktok-all-in-one.p.rapidapi.com/feed?region=US&device_id=7523368224928586621'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0d322a12e7mshde52d1409671e01p107fd1jsn667675247fe8',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    res.status(200).send({ awemeList: result.aweme_list })
  } catch (error) {
    console.error(error)
  }
}
