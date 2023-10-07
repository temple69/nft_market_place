// /api/nfts/get/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const response = await axios.get('https://api.opensea.io/api/v1/assets', {
      headers: {
        'X-API-KEY': '0ade3081dbe445b99bde612a3069a364'
      },
      params: {
        order_direction: 'desc',
        offset: '0',
        limit: '200' // Increased limit to fetch more assets as we'll be filtering out some
      }
    });

    const seenCollections = new Set();
    const uniqueCollectionAssets = [];
    const otherAssets = [];

    for (const asset of response.data.assets) {
      if (uniqueCollectionAssets.length < 22 && !seenCollections.has(asset.collection.slug)) {
        seenCollections.add(asset.collection.slug);
        uniqueCollectionAssets.push(asset);
      } else {
        otherAssets.push(asset);
      }
    }

    // Combine the unique collection assets with the other assets
    const combinedAssets = [...uniqueCollectionAssets, ...otherAssets];

    // Extract and filter the required data from the combined assets
    const filteredData = combinedAssets.slice(0, 52).map(asset => ({
      name: asset.asset_contract.name,
      description: asset.description,
      token_id: asset.token_id,
      address: asset.asset_contract.address,
      image: asset.asset_contract.image_url,
      video: asset.animation_url,
      date: asset.asset_contract.created_date,
      blockchain: asset.asset_contract.chain_identifier,
      price: asset.asset_contract.seller_fee_basis_points * 0.0001
    }));

    return NextResponse.json(filteredData, { status: 200 });

  } catch (error) {
    let errorMessage = "Internal Server Error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      {
        message: errorMessage,
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
