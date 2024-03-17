// client.tsx
import { createClient } from "microcms-js-sdk";

// microCMSと接続 
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
    apiKey: process.env.MICROCMS_API_KEY || '',
})