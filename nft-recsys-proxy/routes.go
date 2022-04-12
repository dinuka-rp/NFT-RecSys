package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Routes(Router *gin.Engine) {

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
