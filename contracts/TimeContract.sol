pragma solidity ^0.5.0;

contract TimeContract {
  uint256 private startTime;

  constructor(uint256 newStartTime) public {
    startTime = newStartTime;
  }

  /**
  * timeLockedFunction will return true if accessible given the time limitation
  */
  function timeLockedFunction() external returns (bool){
    require(now >= startTime);
    return true;
  }
}
