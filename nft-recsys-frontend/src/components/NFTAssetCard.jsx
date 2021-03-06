import React from "react";
import styled from "styled-components";
import { glassBox } from "../styles/common-styled";

const NFTAssetCard = ({ cardDetails }) => {
    // name, collectionSlug, tokenId, assetContractAddr, reason
    const reason = cardDetails?.reason;

    return (
        <Card reason={reason}>
            {/* <div>
        <div>NFT Name:</div>
        <div>{cardDetails.name}</div>
      </div> */}
            <div className="imgContainer">
                <img src={cardDetails.image_url} alt="nft"></img>
            </div>
            <div className="txtGroup">
                <div className="txtBlock">
                    <div className="label">NFT Collection:</div>
                    <div className="value">{cardDetails.collection_name}</div>
                </div>
                <div className="txtBlock">
                    <div className="label">NFT Token ID:</div>
                    <div className="value">{cardDetails.nft_id}</div>
                </div>
                <div className="txtBlock">
                    <div className="label">NFT Asset Contract Address:</div>
                    <div className="value" style={{ fontSize: "0.6rem" }}>
                        {cardDetails.asset_contract_address}
                    </div>
                </div>
                {reason ? (
                    <div className="txtBlock reasonTxtSection">
                        {/* TODO: check if showing progress looks much better - do this later */}
                        {/* https://ant.design/components/progress/ */}

                        {/* reason for recommending */}
                        <div className="label">
                            {reason}
                            {/* {cardDetails.reason} */}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Card>
    );
};

export default NFTAssetCard;

const Card = styled(glassBox)`
    display: inline-block;
    width: 300px;
    height: 470px;
    margin: 2.3em 1em;
    // background: lightblue;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    transition: 0.2s ease-out;
    // transition: box-shadow 1s ease-in-out;
    // transition: width 1s ease-in-out;
    cursor: pointer; // uncomment this after adding expansion

    .imgContainer {
        width: 290px;
        height: 310px;
        margin: 5px 5px;
        background-color: #ccc;
        border-radius: 12px;
        overflow: hidden;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .txtGroup {
        width: 90%;
        margin: auto;
    }

    .txtBlock {
        margin-top: 0.7em;
    }

    .label {
        color: #bbb;
    }

    .value {
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
    }

    .reasonTxtSection {
        opacity: 0;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
        height: ${(props) =>
            props.reason
                ? "498px"
                : "470px"}; // change this only if reason is availalble

        .reasonTxtSection {
            opacity: 1;
        }
    }
`;
