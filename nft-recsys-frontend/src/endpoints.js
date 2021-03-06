export const backendProxy = process.env.REACT_APP_PROXY_API_ENDPOINT;

export const traitRecEndpoint = `${backendProxy}rec/trait`; // get trait based recommendations
export const trendsRecEndpoint = `${backendProxy}rec/trends`; // get trends based recommendations
export const basicContentRecEndpoint = `${backendProxy}rec/basic-content`; // get basic content based recommendations

export const refItemInfoEndpoint = `${backendProxy}item-info`; // get info of ref item

export const generateFromNewInputEndpoint = `${backendProxy}rec/user-input`; // recommendations from user externally entered NFTs

export const defaultBiasEndpoint = `${backendProxy}default-bias`; // save new default bias [Admin]
export const addNewNFTsAdminEndpoint = `${backendProxy}nfts/add`; // add new NFTs into the system [Admin]

export const userBiasEndpoint = `${backendProxy}user-bias`; // save user bias [User]

export const trendsEndpoint = `${backendProxy}trends`; // add new trends into the system [Admin]
