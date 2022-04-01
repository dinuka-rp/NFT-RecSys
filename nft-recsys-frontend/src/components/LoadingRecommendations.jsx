import React from 'react'

// THIS IS EXTRA FANCY WORK
// keep updating this view using a progress polling API, to display the recommendations generation progress.
// This is only required for recommendations generated among a group of items sent to the system.
// If not, recommendations are pre-generated. Those won't take a long time to be received.

const LoadingRecommendations = () => {
  return (
    <div>LoadingRecommendations</div>
  )
}

export default LoadingRecommendations