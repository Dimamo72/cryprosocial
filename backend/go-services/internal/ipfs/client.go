package ipfs

import (
	"bytes"
	"context"
	"io"
	shell "github.com/ipfs/go-ipfs-api"
)

type Client struct {
	sh *shell.Shell
}

func NewClient(url string) *Client {
	return &Client{
		sh: shell.NewShell(url),
	}
}

func (c *Client) Add(ctx context.Context, data []byte) (string, error) {
	reader := bytes.NewReader(data)
	return c.sh.Add(reader)
}

func (c *Client) Get(ctx context.Context, hash string) ([]byte, error) {
	reader, err := c.sh.Cat(hash)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	return io.ReadAll(reader)
}

func (c *Client) Pin(ctx context.Context, hash string) error {
	return c.sh.Pin(hash)
}

func (c *Client) Unpin(ctx context.Context, hash string) error {
	return c.sh.Unpin(hash)
} 