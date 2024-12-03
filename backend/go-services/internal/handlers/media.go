package handlers

import (
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/mo/cryptosocial/backend/go-services/internal/services"
)

type MediaHandler struct {
	mediaService *services.MediaService
}

func NewMediaHandler(mediaService *services.MediaService) *MediaHandler {
	return &MediaHandler{
		mediaService: mediaService,
	}
}

func (h *MediaHandler) Upload(c *gin.Context) {
	file, _, err := c.Request.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No file uploaded"})
		return
	}
	defer file.Close()

	data, err := io.ReadAll(file)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read file"})
		return
	}

	hash, err := h.mediaService.Upload(c.Request.Context(), data)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to upload file"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"hash": hash})
}

func (h *MediaHandler) Get(c *gin.Context) {
	hash := c.Param("hash")
	if hash == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No hash provided"})
		return
	}

	data, err := h.mediaService.Get(c.Request.Context(), hash)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get file"})
		return
	}

	c.Data(http.StatusOK, "application/octet-stream", data)
}

func (h *MediaHandler) Delete(c *gin.Context) {
	hash := c.Param("hash")
	if hash == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No hash provided"})
		return
	}

	err := h.mediaService.Delete(c.Request.Context(), hash)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete file"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "File deleted successfully"})
} 