import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../shared/mocks/products.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
