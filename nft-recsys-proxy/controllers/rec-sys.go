package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"nft-recsys-proxy/util"
)

// GetTraitBaseRec  Get pre-generated recommendations - trait content + trait rarity
func GetTraitBaseRec(c *gin.Context) {
	url := util.TraitContentRecSysEndpoint + "/info"
	remoteResponse := util.GetFromRemoteAPI(url, c)

	if remoteResponse == nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   remoteResponse,
	})
}
