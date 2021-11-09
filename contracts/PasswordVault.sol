// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;


import "@openzeppelin/contracts/access/Ownable.sol";

/**

  PasswordVault contract. Contract that interfaces with the PASSR_. DApp.
  This contracts enable the owner of the contract to store his passwords in a hashed way in a smart contract.
  
  Implements the Ownable smart contract from openzeppelin. 

*/

contract PasswordVault is Ownable{

  //PasswordVault struct for returning the full password/locations array
  struct Vault{
    string[] passwords;
    string[] locations;
  }
  /** 
    param usageCounter: uint;
    
    Counter that keeps track of interaction between the user and the smart contract.
    This param will be used as a receivable percentage for airdrops.

    Airdrops will have a fixed amount of tokens distributed, a user get's a
    percentage amount of tokens based on their usageCounter.

    SCENARIO:
     -- An airdrop of 10K tokens spread over 10 users --
    User 1 has a usageCounter of 11 while the other 9 have a usageCounter of 1.
    The total amount of usages is 20 so for every usage, 500 tokens will be distributed.
    User 1 will receive 11 * 500 tokens while the others receive 1 * 500.
  */

  uint usageCounter;

  /**
    param passwords: Array<string>
    param locations: Array<string>

    Arrays for password and location storage. The stored passwords are
    hashed on the client side based on a master password.
  
  */
  string[] private passwords;
  string[] private locations;

  // modifier to ensure the locations array is never negative;
  modifier nonNegativeLocation {
    require(locations.length > 0);
    _;
  }

  //modifier to ensure the passwords array is never negative;
  modifier nonNegativeHash {
    require(passwords.length > 0);
    _;
  }

  /** 
    CONSTRUCTOR
    Initiates the usageCounter;
  */
  constructor(){
    usageCounter = 0;
  }

  /*
    addToVault()

    DESC: 
    This function adds a password and it's key to to the passwordvault, returns true on succes.

    REQUIRED:
      - location can not be an empty string,
      - hashed can not be an empty string,
      - No duplicate locations can be stored,

    SUCCES:
    Stores the password and location in their respective arrays.
    Updates the usage counter.
    returns true;

  */
  function addToVault(string memory _location, string memory _hashed) public onlyOwner returns(bool){
    require(bytes(_location).length > 0, "Empty _location string not allowed");
    require(bytes(_hashed).length > 0, "Empty _hashed string not allowed");
    for(uint i = 0; i < locations.length; i++){
      require(keccak256(bytes(locations[i])) != keccak256(bytes(_location)), "No duplicate locations allowed");
    }
    passwords.push(_hashed);
    locations.push(_location);
    usageCounter = usageCounter + 1;
    return true;
  }

  /*
    getCompleteVault()

    DESC: This function returns the complete vault of a user.

  */
  function getCompleteVault() public onlyOwner view returns(Vault memory){
    return Vault(passwords, locations);
  }

    /*
    removeFromVault()

    DESC: This function removes a password from the passwordVault.

    REQUIRED:
      - location can not be an empty string.
      - both passwords and locations can not be negative after the operation.

    SUCCES:
    Removes the password and location from the passwordVault;

  */
  function removeFromVault(string calldata _location) public onlyOwner nonNegativeLocation nonNegativeHash {
    require(bytes(_location).length > 0, "Empty _location string not allowed");
    for(uint i = 0; i < locations.length; i++){
        if(keccak256(bytes(locations[i])) == keccak256(bytes(_location))){
          delete locations[i];
          delete passwords[i];
          i = locations.length;
        }
    }
  }

  /*
    getUsageCount()

    DESC: 
    This function returns the usageCounter value.
    This is not onlyOwner protected, this allows code to easly access the usageCount and use it when distributing airdrops.

    SUCCES:
    returns usageCounter;

  */
  function getUsageCount() public view returns(uint count){
    return usageCounter;
  }

}
