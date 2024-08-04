import { FullConfig } from '@playwright/test';
import dotenv = require('dotenv');

async function globalSetup(config: FullConfig) {
    dotenv.config({
        path: '.env',
        override: true
    });
}

module.exports = globalSetup;