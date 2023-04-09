import str from './data.js'

// console.log(str.match(/.*\?$/gim))
// Массив вопросов

// console.log(str.match(/^Ответ.*$/gim))
// Массив ответов

const rootDiv = document.querySelector('#root')
const questions = str.match(/.*\?$/gim)
const answers = str.match(/^Ответ.*$/gim)
const dataArr = []

function createArrData() {
	const len = questions.length
	for (let i = 0; i < len; i++) {
		const newObj = {
			0: questions[i],
			1: answers[i],
		}
		dataArr.push(newObj)
	}
}

createArrData()

/////////////////

function createTextblock(arr) {
	for (let item of arr) {
		const h4 = document.createElement('h4')
		const p = document.createElement('p')
		h4.innerHTML = item[0]
		p.innerHTML = item[1]
		rootDiv.append(h4)
		rootDiv.append(p)
	}
}
createTextblock(dataArr)

function pagination() {
	let currentPage = 1
	let rows = 3

	const start = rows * (currentPage - 1)
	const end = start + rows
	const paginatedData = dataArr.slice(start, end)
	// console.log(paginatedData)
}

pagination()
