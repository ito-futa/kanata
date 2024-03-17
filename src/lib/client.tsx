// client.tsx
import { createClient } from "microcms-js-sdk";

// microCMSと接続 
export const client = createClient({
    serviceDomain: process.env.MICROCMS_DOMAIN || '',
    apiKey: process.env.API_KEY || '',
})