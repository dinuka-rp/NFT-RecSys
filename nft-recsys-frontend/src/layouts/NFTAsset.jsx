import React from "react";

const NFTAsset = ({ name, collectionSlug, tokenId, assetContractAddr }) => {
  return (
    <div>
      <div>
        <div>NFT Name:</div>
        <div>{name}</div>
      </div>
      <img src="" alt="nft"></img>
      <div>
        <div>NFT Collection:</div>
        <div>{collectionSlug}</div>
      </div>
      <div>
        <div>NFT Token ID:</div>
        <div>{tokenId}</div>
      </div>
      <div>
        <div>NFT Asset Contract Address:</div>
        <div>{assetContractAddr}</div>
      </div>
    </div>
  );
};

export default NFTAsset;
