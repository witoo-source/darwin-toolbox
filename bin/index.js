#!/usr/bin/env node

import { IPTracker } from "./ipsxModule.js";

const command = process.argv[2];
const target = process.argv[3];
const ipt = new IPTracker(target);

switch (command) {
    case 'ipsx':
        ipt.makeRequest()
        break;
}
