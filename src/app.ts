import { App, GenericMessageEvent } from '@slack/bolt'
import { tweetStatusesUpdate } from './handlers/tweet'
import 'dotenv/config'

// portの宣言
const port = process.env.PORT ? Number(process.env.PORT) : 3000

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});


// ここから下に何らかの処理を書く。
app.message(async ({ message }) => {
  try {
    const eventMessage = message as GenericMessageEvent
    if (eventMessage.text) {
      await tweetStatusesUpdate(eventMessage.text)
    }
  } catch (error) {
    console.error(error);
  }
});


// HTTPサーバーとして起動
(async () => {
  await app.start(port)

  console.log(`Listening for events on ${port}`);
  console.log("🤖 SlackBot is running!");
})();
