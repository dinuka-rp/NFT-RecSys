import React from "react";
import ResultsFeed from "../components/ResultsFeed";
import styled from "styled-components";

// The final view that is expected to be displayed here is not decided yet
// show recommendations based on passed preferences?
// Best option atm: show only trends based recommendations with featured from today's trends

// Have a btn to go to input/ explore NFTs

const Home = () => {
    const results = ["", "", "", "", "", "", "", ""];

    return (
        <>
            <header>
                <Title>NFT Rec-Sys</Title>
            </header>

            <ResultsFeed results={results} />
        </>
    );
};

export default Home;

const Title = styled.h1`
    // margin: auto;
    text-align: center;
`;
