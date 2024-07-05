#!/usr/bin/env node

import { scryptSync } from "node:crypto";

import meow from "meow";

const cli = meow(
	`
	Usage
	  $ pmpm <sentence>

	Options
	  --master-key    Pass a master key to create unique passwords
	  --pin           Create a 4-digit PIN instead of a password

	Examples
	  $ pmpm 'my github password'
	  $ pmpm 'my github password' --master-key='my-master-key'
	  $ pmpm 'my pin for NapoBank' --pin
`,
	{
		importMeta: import.meta,
		flags: {
			masterKey: {
				type: "string",
				default: "w+a9gF04GUnBy22BFtoiT8MPdieOVEct3cgjtRNT8zUm72UkIOHsYm5weIfMPdL/NM/h2GPss68Normef2KKKg==",
			},
			pin: {
				type: "boolean",
				default: false,
			},
		},
	},
);

if (cli.input.length !== 1) {
	console.error("Please provide a (single) sentence to generate a password from.");
	process.exit(1);
}

const password = scryptSync(cli.input[0]!, Buffer.from(cli.flags.masterKey), 32, { N: 2 ** 14, r: 8, p: 1 }).toString(
	"base64url",
);
if (cli.flags.pin) {
	console.log(password.replaceAll(/\D/g, "").slice(0, 4).padStart(4, "0"));
} else {
	console.log(password);
}

process.exit(0);
