pragma solidity 0.8.17;

contract Name {
    bytes32 public name;

    function setName(bytes32 _name) public {
        name = _name;
    }

    function getName() public view returns (bytes32) {
        return name;
    }
}
