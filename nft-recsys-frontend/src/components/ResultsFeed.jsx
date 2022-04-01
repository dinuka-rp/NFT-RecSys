import React from "react";
import styled from "styled-components";
import NFTAssetCard from "./NFTAssetCard";

const ResultsFeed = ({ results }) => {
  const exampleCardDetails = {
    name: "Ape",
    collectionSlug: "ape-collection",
    tokenId: 101,
    assetContractAddr: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    // img:""
  };

  return (
    <div>
      <header>
        <Title>NFT Rec-Sys</Title>
      </header>
      <ResultsGrid>
        {results.map((result) => (
          <NFTAssetCard
            key={"asset-card-" + result.id}
            cardDetails={exampleCardDetails}
          />
        ))}
      </ResultsGrid>
    </div>
  );
};

export default ResultsFeed;

const Title = styled.h1`
  // margin: auto;
  text-align: center;
`;

const ResultsGrid = styled.div`
  max-width: 90vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    max-width: 95vw;
  }
`;
