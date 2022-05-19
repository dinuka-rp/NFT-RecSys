import { Button, Modal } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import NFTAssetCard from "./NFTAssetCard";

const ResultsFeed = ({ results }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [chosenItemDetails, setChosenItemDetails] = useState();
    return (
        <div>
            {chosenItemDetails && (
                <>
                    <Modal
                        title={`${chosenItemDetails.asset_contract_address}-${chosenItemDetails?.nft_id} NFT Details`}
                        centered
                        visible={modalVisible}
                        onOk={() => setModalVisible(false)}
                        onCancel={() => setModalVisible(false)}
                        width={"80vw"}
                        height={"80vh"}
                        footer={[
                            <Button
                                key="modal-link"
                                href={chosenItemDetails.open_sea_link}
                                type="primary"
                                onClick={() => setModalVisible(false)}
                            >
                                View on OpenSea
                            </Button>,
                            <Button
                                key="close-modal"
                                onClick={() => setModalVisible(false)}
                            >
                                Close
                            </Button>,
                        ]}
                    >
                        <pre>{JSON.stringify(chosenItemDetails, null, 4)}</pre>
                    </Modal>
                </>
            )}
            <ResultsGrid>
                {results.map((result, index) => (
                    <div
                        key={"asset-card-div" + index}
                        onClick={() => {
                            setChosenItemDetails(result);
                            setModalVisible(true);
                        }}
                    >
                        <NFTAssetCard
                            key={"asset-card-" + index}
                            cardDetails={result}
                        />
                    </div>
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
