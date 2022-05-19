import Layout from "../layouts/Layout";
import React from "react";
import { PageContainer } from "../styles/common-styled";

const Docs = () => {
    return (
        <Layout>
            <PageContainer>
                <h1>Documentation</h1>
                <h2>
                    How to Generate Recommendations using the Recommendations
                    Engine?
                </h2>
                <p>
                    <u>Generating Social Trends-based Recommendations</u>
                    <ul>
                        <li>
                            When the home screen is loaded, the trends based
                            reocmmendations are fetched and displayed as
                            featured recommendations.
                            <ul>
                                <li>
                                    This does not require user-input to generate
                                    recommendations.
                                </li>
                            </ul>
                        </li>
                        <li>
                            The social trends-based recommendations model uses
                            Twitter-trends for the purpose of generating social
                            trends-based recommendations
                        </li>
                    </ul>
                    <u>Generating Basic Content-based Recommendations</u>
                    <ul>
                        <li>
                            Head over to the Recommendations by Reference page
                        </li>
                        <li>
                            Make sure that the initial toggle between
                            content-based & trait based is towards content-based
                            recommendations
                        </li>
                        <li>
                            Enter the asset contract-address & the token Id of
                            the NFT that is required to be used as the point of
                            reference to generate recommendations
                            <ul>
                                <li>
                                    Currently only one item is supported to be
                                    used as a point of reference
                                </li>
                            </ul>
                        </li>
                        <li>
                            If the reference NFT is available in the system, the
                            image and data of the NFT will be loaded under{" "}
                            <em>Chosen NFTs</em>
                            <ul>
                                <li>
                                    In the current implementation only items
                                    within the system will be able to be used as
                                    points of reference
                                </li>
                            </ul>
                        </li>
                        <li>
                            Click on <em>Generate Recommendations</em> to load
                            generate & view the recommendations
                        </li>
                    </ul>
                    <u>Generating Trait based Recommendations</u>
                    <ul>
                        <li>
                            Head over to the Recommendations by Reference page
                        </li>
                        <li>
                            Make sure that the initial toggle between
                            content-based & trait based is towards Trait-based
                            recommendations
                        </li>
                        <li>
                            Trait-based Recommendations can be both Trait
                            Similarity matched and Trait Rarity matched
                        </li>
                        <li>
                            The slider can be used to adjust the bias used to
                            recommend the prefered bias of items from Trait
                            Similarity/ Rarity models.
                        </li>
                        <li>
                            Enter the asset contract-address & the token Id of
                            the NFT that is required to be used as the point of
                            reference to generate recommendations
                            <ul>
                                <li>
                                    Currently only one item is supported to be
                                    used as a point of reference
                                </li>
                            </ul>
                        </li>
                        <li>
                            If the reference NFT is available in the system, the
                            image and data of the NFT will be loaded under{" "}
                            <em>Chosen NFTs</em>
                            <ul>
                                <li>
                                    In the current implementation only items
                                    within the system will be able to be used as
                                    points of reference
                                </li>
                            </ul>
                        </li>
                        <li>
                            Click on <em>Generate Recommendations</em> to load
                            generate & view the recommendations
                        </li>
                        <li>
                            Currently supported collection:{" "}
                            <em>Bored Ape Yacht Club</em>
                        </li>
                    </ul>
                    Click on any of the items to view all the information used
                    to generating the recommendations and the details of the
                    item in a modal window.
                </p>
            </PageContainer>
        </Layout>
    );
};

export default Docs;
