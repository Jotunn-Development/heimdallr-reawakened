module.exports = {
  minArgs: 2,
  correctSyntax: 'Incorrect Syntax: {PREFIX}add <num 1> <num 2> <etc>',

  callback: ({ message, args }) => {
    let sum = 0

    for (const arg of args) {
      sum += parseInt(arg)
    }

    message.reply(`The sum is ${sum}`)
  },
}
