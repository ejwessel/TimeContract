const TimeContract = artifacts.require('./TimeContract');

contract('TimeContract', async (accounts) =>  {
  before('deploy TimeContract', async() => {
    //Fri Feb 15 15:53:00 EST 2019
    instance_1 = await TimeContract.new(1550263980);
    //Tue Mar 19 20:00:00 EDT 2019
    instance_2 = await TimeContract.new(1553040000);
  });

  it("TimeContract Fri Feb 15 15:53:00 EST 2019", async() => {
    val = await instance_1.timeLockedFunction.call();
    assert.equal(val, true, "return value is not true");
  });

  it("TimeContract Tue Mar 19 20:00:00 EDT 2019", async() => {
    val = await instance_2.timeLockedFunction.call();
    assert.equal(val, true, "return value is not true");
  });
});
