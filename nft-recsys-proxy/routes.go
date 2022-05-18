package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"nft-recsys-proxy/controllers"
)

func Routes(Router *gin.Engine) {

	RoutesV1 := Router.Group("/v1.0")
	{
		// have a requests to relay GET info from Python ML Flask API

		RoutesV1.GET("/rec/trait", controllers.GetTraitBaseRec)
		RoutesV1.GET("/rec/basic-content", controllers.GetBasicContentRec)
		RoutesV1.GET("/rec/trends", controllers.GetTrendsRec)
		//RoutesV1.GET("/rec/featured", controllers.)

	}

	/*
		Stupid simple ping endpoint for status checks
	*/
	Router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	/*
		We have to show resource not found error if some
		application request undefined route.
	*/
	Router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{
			"status": "failed",
			"error": gin.H{
				"code":    404,
				"message": "Resource not found",
			},
		})
	})
}
