package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"nft-recsys-proxy/util"
)

// GetInfoTrait  Get item info for trait-based rec items
func GetInfoTrait(c *gin.Context) {
	referenceId := c.Query("reference_id")

	url := util.TraitSimilarityRecSysEndpoint + "/ref-info?reference_id=" + referenceId
	remoteResponse := util.GetFromRemoteAPI(url, c)

	if remoteResponse == nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   remoteResponse,
	})
}

// GetInfoBasicContent  Get item info for basic content-based rec items
func GetInfoBasicContent(c *gin.Context) {
	referenceId := c.Query("reference_id")

	url := util.BasicContentRecSysEndpoint + "/ref-info?reference_id=" + referenceId
	remoteResponse := util.GetFromRemoteAPI(url, c)

	if remoteResponse == nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   remoteResponse,
	})
}
