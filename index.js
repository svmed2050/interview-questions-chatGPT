import str from './data.js'

// console.log(str.match(/.*\?$/gim))
// Массив вопросов

// console.log(str.match(/^Ответ.*$/gim))
// Массив ответов

let questions = str.match(/.*\?$/gim)
let answers = str.match(/^Ответ.*$/gim)
