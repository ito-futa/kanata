// client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'saiunkanata',
    apiKey: process.env.API_KEY,
});