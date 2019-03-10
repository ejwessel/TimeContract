const TimeContract = artifacts.require('./TimeContract');

contract('TimeContract', async (accounts) =>  {
  before('deploy TimeContract', async() => {
    //Sat Mar  2 19:00:00 EST 2019
    instance_pass = await TimeContract.new(1551571200);
    //Tue Mar 19 20:00:00 EDT 2019
    instance_fail = await TimeContract.new(1553040000);
  });

  it("TimeContract Pass", async() => {
    val = await instance_pass.timeLockedFunction.call();
    assert.equal(val, true, "return value is not true");
  });

  it("TimeContract Fail", async() => {
    val = await instance_fail.timeLockedFunction.call();
    assert.equal(val, true, "return value is not true");
  });
});
