const TimeContract = artifacts.require('./TimeContract');
const helper = require('./utils/utils.js');

const Sun_Feb_10_00_00_00_UTC_2019 = 1549756800;
const Wed_Mar_20_00_00_00_UTC_2019 = 1553040000;
const SECONDS_IN_DAY = 86400;

contract('TimeContract', async (accounts) =>  {
    before('deploy TimeContract', async() => {
        instance_1 = await TimeContract.new(Sun_Feb_10_00_00_00_UTC_2019);
        instance_2 = await TimeContract.new(Wed_Mar_20_00_00_00_UTC_2019);
    });

    beforeEach(async() => {
        snapShot = await helper.takeSnapshot();
        snapshotId = snapShot['result'];
    });
    afterEach(async() => {
        await helper.revertToSnapShot(snapshotId);
    });

    it("Sun Feb 10 00:00:00 UTC 2019 (before current time)", async() => {
        var output = await instance_1.isNowAfter.call();
        assert.equal(output, true, "output should have been true");
    });

    it("Wed Mar 20 00:00:00 UTC 2019 (after current time)", async() => {
        var output = await instance_2.isNowAfter.call();
        assert.equal(output, false, "output should have been false");
    });

    it("Wed Mar 20 00:00:00 UTC 2019 (after current time)", async() => {
        await helper.advanceTimeAndBlock(SECONDS_IN_DAY * 100); //advance 100 days
        var output = await instance_2.isNowAfter.call();
        assert.equal(output, true, "output should have been true");
    });
});
