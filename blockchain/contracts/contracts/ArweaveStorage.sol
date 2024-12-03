// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ArweaveStorage is Ownable, ReentrancyGuard {
    struct ContentMetadata {
        string arweaveId;
        address owner;
        string contentType;
        uint256 size;
        uint256 timestamp;
        bool isPermanent;
    }

    mapping(string => ContentMetadata) private contentMetadata;
    mapping(address => string[]) private userContent;

    event ContentStored(string arweaveId, address owner, string contentType, uint256 size);
    event ContentMarkedPermanent(string arweaveId);

    function storeContent(
        string memory arweaveId,
        string memory contentType,
        uint256 size
    ) external nonReentrant {
        require(bytes(arweaveId).length > 0, "Invalid Arweave ID");
        require(bytes(contentType).length > 0, "Invalid content type");
        require(size > 0, "Invalid size");

        contentMetadata[arweaveId] = ContentMetadata({
            arweaveId: arweaveId,
            owner: msg.sender,
            contentType: contentType,
            size: size,
            timestamp: block.timestamp,
            isPermanent: false
        });

        userContent[msg.sender].push(arweaveId);

        emit ContentStored(arweaveId, msg.sender, contentType, size);
    }

    function markContentPermanent(string memory arweaveId) external onlyOwner {
        require(bytes(arweaveId).length > 0, "Invalid Arweave ID");
        require(bytes(contentMetadata[arweaveId].arweaveId).length > 0, "Content does not exist");
        require(!contentMetadata[arweaveId].isPermanent, "Content already permanent");

        contentMetadata[arweaveId].isPermanent = true;
        emit ContentMarkedPermanent(arweaveId);
    }

    function getContentMetadata(string memory arweaveId) external view returns (ContentMetadata memory) {
        require(bytes(arweaveId).length > 0, "Invalid Arweave ID");
        require(bytes(contentMetadata[arweaveId].arweaveId).length > 0, "Content does not exist");
        return contentMetadata[arweaveId];
    }

    function getUserContent(address user) external view returns (string[] memory) {
        return userContent[user];
    }

    function isContentPermanent(string memory arweaveId) external view returns (bool) {
        require(bytes(arweaveId).length > 0, "Invalid Arweave ID");
        require(bytes(contentMetadata[arweaveId].arweaveId).length > 0, "Content does not exist");
        return contentMetadata[arweaveId].isPermanent;
    }
}
