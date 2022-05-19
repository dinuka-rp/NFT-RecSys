import axios from "axios";
import { refItemInfoEndpoint } from "../endpoints";

// Get reference item info - basic content
export async function retrieveItemInfoBasicContent(initRefItem) {
    const res = await axios.get(
        refItemInfoEndpoint + `/basic-content?reference_id=${initRefItem}`,
        {}
    );

    return res.data;
}

// Get reference item info - trait
export async function retrieveItemInfoTrait(initRefItem) {
    const res = await axios.get(
        refItemInfoEndpoint + `/trait?reference_id=${initRefItem}`,
        {}
    );

    return res.data;
}
