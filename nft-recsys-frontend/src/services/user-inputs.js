import axios from "axios";
import { generateFromNewInputEndpoint, trendsEndpoint } from "../endpoints";

// enter one NFT to generate recommendations
// this will generate recommendations from what the system has (items already previously added to the system)
export async function enterOneAndGenerate(itemForReference) {
  const res = await axios.post(generateFromNewInputEndpoint + `/single`, {
    item: itemForReference,
  });

  return res.data;
}

// enter multiple NFTs to generate recommendations
// this will generate recommendations from what the system has (items already previously added to the system)
export async function enterMultipleAndGenerate(itemsForReference) {
  const res = await axios.post(generateFromNewInputEndpoint + `/multi`, {
    items: itemsForReference,
  });

  return res.data;
}

// (TODO: Extra) select trends to generate recommendations
export async function selectUserTrends(userId, trends) {
  const res = await axios.post(trendsEndpoint + `/${userId}/add`, {
    trends: trends,
  });

  return res.data;
}
