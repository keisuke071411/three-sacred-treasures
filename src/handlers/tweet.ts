import { client } from "../app";

export const tweetStatusesUpdate = async (sendText: string) => {
  try {
    await client.post("statuses/update", {
      status: sendText,
    });
  } catch (err) {
    console.error(err)
    console.error('tweetStatusesUpdate')
    throw Error
  }
}
