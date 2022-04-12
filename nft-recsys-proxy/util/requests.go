package util

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"log"
	"net/http"
)

func GetFromRemoteAPI(url string, c *gin.Context) interface{} {
	resp, err := http.Get(url)
	if err != nil {
		log.Println(err)
		fmt.Println("something went wrong when requesting the remote url")
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"status": "failed",
			"error": gin.H{
				"message": "Internal server error",
			},
		})
		return nil
	} else if resp.StatusCode != http.StatusOK {
		c.JSON(http.StatusOK, gin.H{
			"status": resp.StatusCode,
			//"data": resp.StatusCode,
		})
		return nil
	}

	responseBodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Println(err)
		fmt.Println("could not read response body")
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"status": "failed",
			"error": gin.H{
				"message": "Internal server error",
			},
		})
		return nil
	}

	var remoteResponse interface{}
	json.Unmarshal(responseBodyBytes, &remoteResponse)

	return remoteResponse
}
