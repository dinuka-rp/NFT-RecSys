import axios from "axios";
import { traitRecEndpoint, trendsRecEndpoint } from "../endpoints";

// Get pre-generated recommendations - trait content + trait rarity
export async function retrieveTraitBasedRecommendations(initRefItem) {
  // TODO: change request param to query param here
  const res = await axios.get(traitRecEndpoint + `/${initRefItem}`, {});

  return res.data;
}

// Get pre-generated recommendations - trends based
export async function retrieveTrendsBasedRecommendations() {
  //  send quantity needed - have pagination for this
  const res = await axios.get(trendsRecEndpoint + ``, {});

  return res.data;
}
