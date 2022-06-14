module.exports = {
  description: 'Adds up to ten numbers together and outputs the sum',

  minArgs: 2,
  maxArgs: 10,
  correctSyntax: 'Incorrect Syntax: {PREFIX}add <num 1> <num 2> ... <num 10>',

  slash: 'both',
  testOnly: true,

  callback: ({ message, args }) => {
    let sum = 0

    for (const arg of args) {
      sum += parseInt(arg)
    }

    message.reply(`The sum is ${sum}`)
  },
}
