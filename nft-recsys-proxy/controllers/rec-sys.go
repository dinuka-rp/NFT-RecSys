package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"nft-recsys-proxy/util"
)

// GetTraitBaseRec  Get pre-generated recommendations - trait similarity + trait rarity
func GetTraitBaseRec(c *gin.Context) {
	referenceId := c.Query("reference_id")

	similarityUrl := util.TraitSimilarityRecSysEndpoint + "/rec?reference_id=" + referenceId
	remoteResponseSimilarity := util.GetFromRemoteAPI(similarityUrl, c)

	rarityUrl := util.TraitRarityRecSysEndpoint + "/rec?reference_id=" + referenceId
	remoteResponseRarity := util.GetFromRemoteAPI(rarityUrl, c)

	if remoteResponseSimilarity == nil && remoteResponseRarity == nil {
		return
	}

	// ----- structure response data
	type responseMap struct {
		SimilarityRec interface{} `json:"similarity_based_rec,omitempty"`
		RarityRec     interface{} `json:"rarity_based_rec,omitempty"`
	}

	var response = responseMap{
		SimilarityRec: remoteResponseSimilarity,
		RarityRec:     remoteResponseRarity,
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   response,
	})
}

// GetBasicContentRec  Get pre-generated recommendations - content based
func GetBasicContentRec(c *gin.Context) {
	referenceId := c.Query("reference_id")

	url := util.BasicContentRecSysEndpoint + "/rec?reference_id=" + referenceId
	remoteResponse := util.GetFromRemoteAPI(url, c)

	if remoteResponse == nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   remoteResponse,
	})
}
