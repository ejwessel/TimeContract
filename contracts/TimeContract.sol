pragma solidity ^0.5.0;

contract TimeContract {
  uint256 private startTime;

  constructor(uint256 newStartTime) public {
    startTime = newStartTime;
  }

  /**
  * timeFunction will return true if now is after the given start time
  */
  function timeFunction() external view returns (bool){
      return (now >= startTime);
  }
}
