import React from "react";
import ResultsFeed from "../components/ResultsFeed";

const Home = () => {
  const results = ["", "", "", "", ""];

  return (
    <>
      {/* <div>Home</div> */}

      <ResultsFeed results={results} />
    </>
  );
};

export default Home;
