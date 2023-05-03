// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config({ path: './.env.local' })

export default async function handler (req, res) {
  const url = 'https://tiktok-all-in-one.p.rapidapi.com/feed?region=US&device_id=7523368224928586621'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) throw new Error({ error: 'fetching error', message: 'Error al hacer el fetching' })

    const result = await response.json()
    res.status(200).send(result.aweme_list)
  } catch (error) {
    console.error(error)
  }
}
