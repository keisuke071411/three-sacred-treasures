"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.client = exports.app = void 0;
const bolt_1 = require("@slack/bolt");
const twitter_1 = __importDefault(require("twitter"));
require("dotenv/config");
exports.app = new bolt_1.App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});
exports.client = new twitter_1.default({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret,
});
exports.port = process.env.PORT ? Number(process.env.PORT) : 3000;
