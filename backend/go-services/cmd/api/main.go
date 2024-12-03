package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/mo/cryptosocial/backend/go-services/internal/handlers"
	"github.com/mo/cryptosocial/backend/go-services/internal/ipfs"
	"github.com/mo/cryptosocial/backend/go-services/internal/services"
)

func main() {
	// Initialize IPFS client
	ipfsClient := ipfs.NewClient("http://localhost:5001")

	// Initialize services
	mediaService := services.NewMediaService(ipfsClient)

	// Initialize handlers
	mediaHandler := handlers.NewMediaHandler(mediaService)

	// Initialize Gin router
	router := gin.Default()

	// Register routes
	api := router.Group("/api")
	{
		media := api.Group("/media")
		{
			media.POST("/upload", mediaHandler.Upload)
			media.GET("/:hash", mediaHandler.Get)
			media.DELETE("/:hash", mediaHandler.Delete)
		}
	}

	// Create HTTP server
	srv := &http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	// Start server in a goroutine
	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to start server: %v", err)
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("Shutting down server...")

	// Give outstanding requests a deadline for completion
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal("Server forced to shutdown:", err)
	}

	log.Println("Server exiting")
} 