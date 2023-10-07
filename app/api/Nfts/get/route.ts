// pages/api/fetchNFTs.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.opensea.io/api/v1/assets', {
      headers: {
        'X-API-KEY': '0ade3081dbe445b99bde612a3069a364'
      },
      params: {
        order_direction: 'desc',
        offset: '0',
        limit: '20'  // Fetch 20 NFTs as an example, you can adjust this
      }
    });

    return res.status(200).json(response.data);

  } catch (error) {
    return res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}
