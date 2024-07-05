import test from "node:test";
import { strict as assert } from "node:assert";

import { execa } from "execa";

test.before(async () => {
	await execa`chmod +x ./distribution/cli.js`;
});

await test("main", async () => {
	const { stdout: stdout1 } = await execa`./distribution/cli.js ${"my github password"}`;
	const { stdout: stdout2 } = await execa`./distribution/cli.js ${"my github password"}`;
	assert.equal(stdout1, stdout2);

	const { stdout: stdout3 } = await execa`./distribution/cli.js ${"my github password"} --master-key=${"my-master-key"}`;
	const { stdout: stdout4 } = await execa`./distribution/cli.js ${"my github password"} --master-key=${"my-master-key"}`;
	assert.equal(stdout3, stdout4);

	assert.notEqual(stdout1, stdout3);

	const { stdout: stdout5 } = await execa`./distribution/cli.js ${"my github password"} --pin`;
	const { stdout: stdout6 } = await execa`./distribution/cli.js ${"my github password"} --pin`;
	assert.equal(stdout5, stdout6);

	assert.notEqual(stdout1, stdout5);

	const { stdout: stdout7 } = await execa`./distribution/cli.js ${"my github password"} --pin --master-key=${"my-master-key"}}`;
	const { stdout: stdout8 } = await execa`./distribution/cli.js ${"my github password"} --pin --master-key=${"my-master-key"}}`;
	assert.equal(stdout7, stdout8);

	assert.notEqual(stdout5, stdout7);
});
