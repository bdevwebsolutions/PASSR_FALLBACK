// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;


import "@openzeppelin/contracts/access/Ownable.sol";

/**
  PasswordVault contract. Contract that interfaces with the PASSR_. DApp.
  This contracts enable the owner of the contract to store his passwords in a hashed way in a smart contract.

  Implements the Ownable smart contract from openzeppelin. 

  * param limit: the passwordlimit that is able to be stored.
  * param stored: the amount of passwords that are currently being stored.

  TODO: 
    *Implement custom token
*/

contract PasswordVault is Ownable{

  struct Vault{
    string[] passwords;
    string[] locations;
  }

  //This makes sure the amount stored can never be negative
  modifier nonNegativeIndex {
    require(locations.length > 0);
    _;
  }

  string[] private passwords;
  string[] private locations;

  //Constructor
  constructor(){
    
  }

  //Add a Password
  function addToVault(string memory _location, string memory _hashed) public onlyOwner{
    passwords.push(_hashed);
    locations.push(_location);
  }

  //Get all Passwords
  function getCompleteVault() public onlyOwner view returns(Vault memory){
    return Vault(passwords, locations);
  }

  //Remove a password check if password still exist
  function removeFromVault(string calldata _location) public onlyOwner nonNegativeIndex {
    for(uint i = 0; i < locations.length; i++){
        if(keccak256(bytes(locations[i])) == keccak256(bytes(_location))){
          delete locations[i];
          delete passwords[i];
          i = locations.length;
        }
    }
  }

}
