import React from "react";
import ResultsFeed from "./ResultsFeed";

// display generated recommendations based on the inputs given by the user
// allow the user to toggle & view the inputs on-top of the page
// show which recommendation is given by which input item + why it was recommended (trait/ trait-rarity/ trend/ content)

const GeneratedRecFeed = () => {
    const results = ["", "", "", "", "", "", "", ""];

    return (
        <div>
            {/* GeneratedRecFeed */}
            <ResultsFeed results={results} />
        </div>
    );
};

export default GeneratedRecFeed;
