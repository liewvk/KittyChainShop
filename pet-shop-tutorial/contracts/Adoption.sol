pragma solidity ^0.5.16;

contract Adoption {
    //array of 16 addresses, 20 bytes
    address[16] public adopters;
// Adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }
// Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}