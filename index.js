import str from './data.js'

// console.log(str.match(/.*\?$/gim))
// Массив вопросов

// console.log(str.match(/^Ответ.*$/gim))
// Массив ответов

const rootDiv = document.querySelector('#root')
const questions = str.match(/.*\?$/gim)
const answers = str.match(/^Ответ.*$/gim)
const len = questions.length

for (let i = 0; i < len; i++) {
	const h4 = document.createElement('h4')
	const p = document.createElement('p')

	h4.innerHTML = `${i + 1}. ` + questions[i]
	p.innerHTML = answers[i]
	rootDiv.append(h4)
	rootDiv.append(p)
}
