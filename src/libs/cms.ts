// microCMS client
import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error("microCMSのapiKeyが不足しています。");
}

export const client = createClient({
  serviceDomain,
  apiKey,
});
