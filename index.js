const TelegramApi = require("node-telegram-bot-api");
const { yesNoOprions } = require("./options");

const BOT_API_KEY = "7013811695:AAFUCfMiI61SImrDupalnCmergtanN2vO6Y";

const bot = new TelegramApi(BOT_API_KEY, { polling: true });

const chats = {};

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Начало работы" },
    { command: "/standUp", description: "Ежедневный стендап" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text == "/start") {
      await bot.sendMessage(chatId, "Привет!");
      return bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/0eb/bdf/0ebbdf11-24fb-4e02-8fd0-b085d6d5401d/192/49.webp"
      );
    }

    if (text == "/standUp") {
      return bot.sendMessage(chatId, "Сделаем стендап?", yesNoOprions);
    }

    return bot.sendMessage(chatId, "Извини, я тебя не понимаю");
  });

  bot.on("callback_query", (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    console.log(msg);

    bot.sendMessage(chatId, `Ты ответил ${data}. Ты точно уверен?`);
  });
};

start();
