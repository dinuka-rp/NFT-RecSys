import React, { useState, useEffect } from "react";
import ResultsFeed from "../components/ResultsFeed";
import styled from "styled-components";
import { retrieveTrendsBasedRecommendations } from "../services/recommendations-generation";
import Layout from "../layouts/Layout";

// The final view that is expected to be displayed here is not decided yet
// show recommendations based on passed preferences?
// Best option atm: show only trends based recommendations with featured from today's trends

// Have a btn to go to input/ explore NFTs

const Home = () => {
    const [trendFeatItems, setTrendFeatItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resp = await retrieveTrendsBasedRecommendations();
            console.log(resp.data);
            setTrendFeatItems(resp.data.trends_featured_rec);
        }
        fetchData();
    }, []);

    return (
        <Layout>
            <header>
                <Title>NFT-RecSys</Title>
            </header>

            {trendFeatItems && <ResultsFeed results={trendFeatItems} />}
        </Layout>
    );
};

export default Home;

const Title = styled.h1`
    // margin: auto;
    text-align: center;
`;
