import Twitter from 'twitter'
import 'dotenv/config'

const client = new Twitter({
  consumer_key: process.env.consumer_key as string,
  consumer_secret: process.env.consumer_secret as string,
  access_token_key: process.env.access_token_key as string,
  access_token_secret: process.env.access_token_secret as string,
});

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
