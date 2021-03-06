import axios from "axios";
import { basicContentRecEndpoint, traitRecEndpoint, trendsRecEndpoint } from "../endpoints";

// Get pre-generated recommendations - trait content + trait rarity
export async function retrieveTraitBasedRecommendations(initRefItem) {
  const res = await axios.get(traitRecEndpoint + `?reference_id=${initRefItem}`, {});

  return res.data;
}

// Get pre-generated recommendations - basic content
export async function retrieveBasicContentBasedRecommendations(initRefItem) {
  const res = await axios.get(basicContentRecEndpoint + `?reference_id=${initRefItem}`, {});

  return res.data;
}

// Get pre-generated recommendations - trends based
export async function retrieveTrendsBasedRecommendations() {
  //  send quantity needed - have pagination for this
  const res = await axios.get(trendsRecEndpoint + ``, {});

  return res.data;
}
