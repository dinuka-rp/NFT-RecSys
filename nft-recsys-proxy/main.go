package main

import (
	"context"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

func main() {
	fmt.Println("--- NFT-RecSys Proxy ---")

	//	--- Mongo Connection
	// TODO: set this from Viper env variable
	clientOptions := options.Client().
		ApplyURI("mongodb+srv://admin:2KRv1funPDgawFu7@recsyscluster.lvxb6.mongodb.net/nft-recsys?retryWrites=true&w=majority")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// connect to MongoDB cluster
	mongoClient, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// panic application upon MongoDB database disconnect
	defer func() {
		if err := mongoClient.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	//	--- Gin router config
	router := gin.Default()

	router.Use(cors.Default())

	/*
		Set BoltDB instance to `boltDB` in gin context
		to use in controllers and then Next().
	*/
	router.Use(func(c *gin.Context) {
		c.Set("mongoClient", mongoClient)
		c.Next()
	})

	// ---- setup routes & listen
	Routes(router)

	router.Run(":5001")
}
