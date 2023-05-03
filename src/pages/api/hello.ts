// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  awemeList: object[]
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
}
