module.exports = {
  yesNoOprions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Да!", callback_data: "Да!" },
          { text: "Нет", callback_data: "Нет" },
        ],
      ],
    }),
  },
};
