import React from "react";
import NFTAsset from "../layouts/NFTAsset";

const Home = () => {
  return (
    <>
      <div>Home</div>

      <NFTAsset
        name={"Ape"}
        collectionSlug={"ape-collection"}
        tokenId={"101"}
        assetContractAddr={"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"}
      />
    </>
  );
};

export default Home;
