import axios from "axios";
import {
  defaultBiasEndpoint,
  addNewNFTsEndpoint,
  trendsEndpoint,
} from "../endpoints";

// enter default admin bias
export async function saveAdminDefaultBias(newDefaultBias) {
  // this system will have only 1 admin (one default bias per system)
  const res = await axios.patch(defaultBiasEndpoint + ``, {
    default_bias: newDefaultBias,
  });

  return res.data;
}

// enter new NFTs to be shown as recommendations
export async function addItemsIntoSystem(newItems) {
  const res = await axios.post(addNewNFTsEndpoint + ``, {
    items: newItems,
  });

  return res.data;
}

// add new trends to be used for trends-based recommendations
export async function addNewTrendsIntoSystem(newTrends) {
  const res = await axios.post(trendsEndpoint + ``, {
    items: newTrends,
  });

  return res.data;
}

//select trends to be used for trends-based recommendations
export async function selectTrendsToBeUsed(trends) {
  // mark boolean for use/ ignore for each trend (set to true by default)
  const res = await axios.put(trendsEndpoint + ``, {
    items: trends,
  });

  return res.data;
}
