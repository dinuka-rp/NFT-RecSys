import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Input, message, Switch } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import GeneratedRecFeed from "../components/GeneratedRecFeed";
import NFTAssetCard from "../components/NFTAssetCard";
import {
    retrieveBasicContentBasedRecommendations,
    retrieveTraitBasedRecommendations,
} from "../services/recommendations-generation";
import { PageContainer } from "../styles/common-styled";

// This is a view to get user's inputs to generate recommendations - the NFTs entered here need not be
// in the system, but recommendations will be generated from what is available in the system.

// Adding reference items, Loading recommendations, Generated Rec can all be in the same page
// Check>> have all components and switch on the same page without redirecting. Make use of React's capabilities.
// Otherwise need to store/ pass reference items to the next page

const GenerateByRef = () => {
    const [chosenItems, setChosenItems] = useState([]);
    const [isTraitBasedRec, setIsTraitBasedRec] = useState(true);

    const [nftAssetContractToBeAdded, setNftAssetContractToBeAdded] =
        useState(null);
    const [nftTokenIdToBeAdded, setNftTokenIdToBeAdded] = useState(null);

    const [recommendedItems, setRecommendedItems] = useState();

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

        // console.log(nftAssetContractToBeAdded);
        // console.log(nftTokenIdToBeAdded);

        if (
            nftAssetContractToBeAdded !== null &&
            nftTokenIdToBeAdded !== null
        ) {
            const newItem = {
                assetContractAddress: nftAssetContractToBeAdded,
                tokenId: nftTokenIdToBeAdded,
            };

            // add new item to chosen reference items list
            setChosenItems([newItem, ...chosenItems]);

            console.log(chosenItems);
            message.success("Adding new reference NFT was successful");
        } else {
            message.warning(
                "Please make sure that you've entered both the NFT Contract Address & Token Id correctly"
            );
            setNftAssetContractToBeAdded(null);
            setNftTokenIdToBeAdded(null);
        }
    };

    const removeItem = (itemToBeRemoved) => {
        const currentListOfItems = [...chosenItems];
        const newListOfItems = currentListOfItems.filter(
            (item) => item !== itemToBeRemoved
        );

        setChosenItems(newListOfItems);
    };

    const generateRecommendations = async () => {
        if (chosenItems.length > 0) {
            if (chosenItems.length === 1) {
                if (isTraitBasedRec) {
                    const respTrait = await retrieveTraitBasedRecommendations(
                        `${chosenItems[0].assetContractAddress}-${chosenItems[0].tokenId}`
                    );
                    // console.log(resp.data);

                    const similarityRec =
                        respTrait.data.similarity_based_rec.similarity_rec;
                    console.log(similarityRec);

                    // TODO: trait rarity resp needs to be shown as well

                    // TODO: use a fixed bias for now and combine the two responses - combine trait and rarity outputs together
                    // The ones that come in both need to be shown ?

                    setRecommendedItems(similarityRec);
                } else {
                    const respBasicContent =
                        await retrieveBasicContentBasedRecommendations(
                            `${chosenItems[0].assetContractAddress}-${chosenItems[0].tokenId}`
                        );
                    // console.log(respBasicContent);
                    const results = respBasicContent.data.content_rec;
                    setRecommendedItems(results);
                }
            } else {
                message.error(
                    "Using multiple reference items isn't currently supported by the system"
                );
            }
        } else {
            message.warning(
                "Please choose NFTs to be considered as a reference for recommendations"
            );
        }
    };

    return (
        <PageContainer>
            <h1>Reference NFT Based Recommendations</h1>

            <section>
                <div>
                    <span style={{ margin: "1.2em" }}>
                        Description content-based Recommendations
                    </span>
                    <Switch
                        defaultChecked
                        onChange={(e) => {
                            // console.log(e);
                            setIsTraitBasedRec(e);
                        }}
                    />
                    <span style={{ margin: "1.2em" }}>
                        Trait-based Recommendations
                    </span>
                </div>
            </section>
            
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
                                    key={"ref-asset-card-" + index}
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
            {/* TODO: let the user pick which kind of recommendations they prioritize (content-based/ trait-content/ rarity) - can be done in User-bias selection page */}
            {/* </section> */}

            <section>
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
            </section>

            {recommendedItems && (
                <section style={{ marginTop: "7rem" }}>
                    <h1>Generated Recommendations</h1>

                    <GeneratedRecFeed recommendedItems={recommendedItems} />
                </section>
            )}
        </PageContainer>
    );
};

export default GenerateByRef;

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
