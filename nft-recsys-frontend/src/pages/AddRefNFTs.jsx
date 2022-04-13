import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import NFTAssetCard from "../components/NFTAssetCard";
import { PageContainer } from "../styles/common-styled";

// This is a view to get user's inputs to generate recommendations - the NFTs entered here need not be
// in the system, but recommendations will be generated from what is available in the system.


// Adding reference items, Loading recommendations, Generated Rec can all be in the same page
// TODO: Check>> have all components and switch on the same page without redirecting. Take use of React's capabilities.
// Otherwise need to store/ pass reference items to the next page?

const AddRefNFTs = () => {
  const [chosenItems, setChosenItems] = useState(["1", "2", "3"]);

  const [nftAssetContractToBeAdded, setNftAssetContractToBeAdded] =
    useState("");
  const [nftTokenIdToBeAdded, setNftTokenIdToBeAdded] = useState("");

  // placeholder card details
  const exampleCardDetails = {
    name: "Ape",
    collectionSlug: "ape-collection",
    tokenId: 101,
    assetContractAddr: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    // img:""
  };

  const addReferenceItem = () => {
    // fetch NFT data to be displayed?

    console.log(nftAssetContractToBeAdded);
    console.log(nftTokenIdToBeAdded);

    const newItem = {
      assetContractAddress: nftAssetContractToBeAdded,
      tokenId: nftTokenIdToBeAdded,
    };

    // add new item to chosen reference items list
    setChosenItems([newItem, ...chosenItems]);

    console.log(chosenItems);
    message.success("Adding new reference NFT was successful");
  };
  const removeItem = (itemToBeRemoved) => {
    const currentListOfItems = [...chosenItems];
    const newListOfItems = currentListOfItems.filter(
      (item) => item !== itemToBeRemoved
    );

    setChosenItems(newListOfItems);
  };

  const generateRecommendations = () => {};

  return (
    <PageContainer>
      <h1>Reference NFTs</h1>

      <section>
        <h2>Add New Reference NFT</h2>

        <NewAdditionSec>
          <Input
            placeholder="NFT Asset Contract Address"
            onChange={(e) => {
              setNftAssetContractToBeAdded(e.target.value);
            }}
          />
          <Input
            placeholder="NFT Token ID"
            onChange={(e) => {
              setNftTokenIdToBeAdded(e.target.value);
            }}
          />

          <Button
            shape="circle"
            size="large"
            icon={<PlusOutlined />}
            onClick={addReferenceItem}
          />
        </NewAdditionSec>
      </section>

      <section>
        <h2>Chosen Reference NFTs</h2>

        <ChosenItemsStrip>
          {chosenItems ? (
            chosenItems.map((item, index) => (
              <div className="cardContainer">
                <NFTAssetCard
                  key={"asset-card-" + index}
                  cardDetails={exampleCardDetails}
                />
                {/* This button jumps around, needs to be fixed */}
                <Button
                  type="text"
                  danger
                  key={"asset-card-remove" + index}
                  onClick={() => removeItem(item)}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            ))
          ) : (
            <>No Items Chosen</>
          )}
        </ChosenItemsStrip>
      </section>

      {/* <section> */}
      {/* <h2>Conditions</h2> */}
      {/* TODO: let the user pick which kind of recommendations they prioritize (trends/ trait-content/ rarity) - can be done in User-bias selection page */}
      {/* </section> */}

      <div style={{ float: "right" }}>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={generateRecommendations}
        >
          Generate Recommendations
        </Button>
      </div>
    </PageContainer>
  );
};

export default AddRefNFTs;

const ChosenItemsStrip = styled.div`
  max-width: 90vw;
  overflow-x: auto;
  margin: auto;
  display: flex;

  background-color: #fff;
  border-radius: 8px;

  .cardContainer {
    // background-color: blue;

    button {
      margin-left: -37px;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 95vw;
  }
`;

const NewAdditionSec = styled.div`
  padding: 2em;
  max-width: 90vw;
  display: flex;

  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;

  input {
    margin: 0.25em;
  }

  @media screen and (max-width: 768px) {
    max-width: 95vw;
  }
`;
