function getShortMessages(messages) {

  return messages.map(function (it) {
    return it.message;
  }).filter(function (message) {
    return message.length < 50;
  });
}

module.exports = getShortMessages;
