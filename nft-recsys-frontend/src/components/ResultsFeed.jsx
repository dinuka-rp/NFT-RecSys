import React from "react";
import styled from "styled-components";
import NFTAssetCard from "./NFTAssetCard";

const ResultsFeed = ({ results }) => {
    // const exampleCardDetails = {
    //     name: "Ape",
    //     collectionSlug: "ape-collection",
    //     tokenId: 101,
    //     assetContractAddr: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    //     // img:""
    // };

    return (
        <div>
            <ResultsGrid>
                {results.map((result, index) => (
                    <NFTAssetCard
                        key={"asset-card-" + index}
                        cardDetails={result}
                    />
                ))}
            </ResultsGrid>
        </div>
    );
};

export default ResultsFeed;

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
