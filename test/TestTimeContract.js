const TimeContract = artifacts.require('./TimeContract');
const truffleAssert = require('truffle-assertions')

contract('TimeContract', async (accounts) =>  {
  before('deploy TimeContract', async() => {
    //Sat Feb  9 19:00:00 EST 2019
    instance_1 = await TimeContract.new(1549756800);
    //Tue Mar 19 20:00:00 EDT 2019
    instance_2 = await TimeContract.new(1553040000);
  });

  it("TimeContract Sat Feb  9 19:00:00 EST 2019 (before current time)", async() => {
    var output = await instance_1.timeLockedFunction.call();
    assert.equal(output, true, "output should have been true");
  });

  it("TimeContract Tue Mar 19 20:00:00 EDT 2019 (after current time)", async() => {
    await truffleAssert.fails(instance_2.timeLockedFunction.call());
  });
});
