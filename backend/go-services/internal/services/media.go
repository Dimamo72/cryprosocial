package services

import (
	"context"
	"github.com/mo/cryptosocial/backend/go-services/internal/ipfs"
)

type MediaService struct {
	ipfsClient *ipfs.Client
}

func NewMediaService(ipfsClient *ipfs.Client) *MediaService {
	return &MediaService{
		ipfsClient: ipfsClient,
	}
}

func (s *MediaService) Upload(ctx context.Context, data []byte) (string, error) {
	return s.ipfsClient.Add(ctx, data)
}

func (s *MediaService) Get(ctx context.Context, hash string) ([]byte, error) {
	return s.ipfsClient.Get(ctx, hash)
}

func (s *MediaService) Delete(ctx context.Context, hash string) error {
	return s.ipfsClient.Unpin(ctx, hash)
} 