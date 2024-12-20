import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.POCKET_BASE_URL);

export default pb;
