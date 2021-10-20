import { App } from '@slack/bolt'
import Twitter from 'twitter'
import 'dotenv/config'

export const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

export const client = new Twitter({
  consumer_key: process.env.consumer_key as string,
  consumer_secret: process.env.consumer_secret as string,
  access_token_key: process.env.access_token_key as string,
  access_token_secret: process.env.access_token_secret as string,
});

export const port = process.env.PORT ? Number(process.env.PORT) : 3000;
