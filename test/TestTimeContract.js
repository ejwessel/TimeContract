const TimeContract = artifacts.require('./TimeContract');
const truffleAssert = require('truffle-assertions')

const Sun_Feb_10_00_00_00_UTC_2019 = 1549756800;
const Wed_Mar_20_00_00_00_UTC_2019 = 1553040000;

contract('TimeContract', async (accounts) =>  {
    before('deploy TimeContract', async() => {
        instance_1 = await TimeContract.new(Sun_Feb_10_00_00_00_UTC_2019);
        instance_2 = await TimeContract.new(Wed_Mar_20_00_00_00_UTC_2019);
    });

    it("Sun Feb 10 00:00:00 UTC 2019 (before current time)", async() => {
        var output = await instance_1.timeFunction.call();
        assert.equal(output, true, "output should have been true");
    });

    it("Wed Mar 20 00:00:00 UTC 2019 (after current time)", async() => {
        var output = await instance_2.timeFunction.call();
        assert.equal(output, false, "output should have been false");
    });
});
