// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

interface IVerifier {
    function verifyProof(uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[2] calldata _pubSignals) external view returns (bool);
}

contract zkGATEMintNft is ERC1155, ERC1155Burnable {
    
    using Counters for Counters.Counter;
    
    mapping(uint256 => string) public _uris;
    mapping(address => uint256) public _nft_id_map;
    
    Counters.Counter _tokenId;

    IVerifier verifier;

    constructor(address _verifier_address) ERC1155("") {

        verifier = IVerifier(_verifier_address);
        // This will make the default counter start from 1, and the first minted NFT with the token id of 1.
        // Therefore when the map returns 0 for _nft_id_map it means that the user doesn't have any minted NFT.
        _tokenId.increment();
    }

    function setURI(string memory newuri, uint256 _id) private {
        _uris[_id] = newuri;
    }

    function getURI() external view returns(string memory) {
        uint256 _id = _nft_id_map[msg.sender];
        require(_id > 0, "The user doesn't have any minted NFT.");

        return _uris[_id];
    }

    function getAccess(uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[2] calldata _pubSignals) external view returns (bool) {
        return verifier.verifyProof(_pA, _pB, _pC, _pubSignals);
    }

    // Tie this mint function with local proof verifiability meaning this will be called only when the local browser proof is verified.
    function mint(string memory _newURI)
        external
    {
        uint256 _id = _tokenId.current();
        // Populate the URI.
        setURI(_newURI, _id);
        // Populate the _nft_id_map.
        _nft_id_map[msg.sender] = _id;
        _mint(msg.sender, _id, 1, "NULL");
        // Publish an event that the NFT was minted.
        _tokenId.increment();
    }
}
