# NFT-RecSys
Trading Recommendations System for Non-fungible-Tokens

How to Generate Recommendations using the Recommendations Engine?
-----------------------------------------------------------------

Generating Social Trends-based Recommendations

*   When the home screen is loaded, the trends based reocmmendations are fetched and displayed as featured recommendations.
    *   This does not require user-input to generate recommendations.
*   The social trends-based recommendations model uses Twitter-trends for the purpose of generating social trends-based recommendations

Generating Basic Content-based Recommendations

*   Head over to the Recommendations by Reference page
*   Make sure that the initial toggle between content-based & trait based is towards content-based recommendations
*   Enter the asset contract-address & the token Id of the NFT that is required to be used as the point of reference to generate recommendations
    *   Currently only one item is supported to be used as a point of reference
*   If the reference NFT is available in the system, the image and data of the NFT will be loaded under _Chosen NFTs_
    *   In the current implementation only items within the system will be able to be used as points of reference
*   Click on _Generate Recommendations_ to load generate & view the recommendations

Generating Trait based Recommendations

*   Head over to the Recommendations by Reference page
*   Make sure that the initial toggle between content-based & trait based is towards Trait-based recommendations
*   Trait-based Recommendations can be both Trait Similarity matched and Trait Rarity matched
*   The slider can be used to adjust the bias used to recommend the prefered bias of items from Trait Similarity/ Rarity models.
*   Enter the asset contract-address & the token Id of the NFT that is required to be used as the point of reference to generate recommendations
    *   Currently only one item is supported to be used as a point of reference
*   If the reference NFT is available in the system, the image and data of the NFT will be loaded under _Chosen NFTs_
    *   In the current implementation only items within the system will be able to be used as points of reference
*   Click on _Generate Recommendations_ to load generate & view the recommendations
*   Currently supported collection: _Bored Ape Yacht Club_

Click on any of the items to view all the information used to generating the recommendations and the details of the item in a modal window.