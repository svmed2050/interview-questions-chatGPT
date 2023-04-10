import str from './data.js'

// console.log(str.match(/.*\?$/gim))
// Массив вопросов

// console.log(str.match(/^Ответ.*$/gim))
// Массив ответов

// const questions = str.match(/.*\?$/gim)
// const answersFirst = str.match(/^Ответ.*$/gim)

const questions = str.match(/.*\?$/gim)
const answers = str.match(/^Ответ.*$/gim)

for (let i = 0; i < answers.length; i++) {
	answers[i] = answers[i].replace(/Ответ: /, '')
}

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

function displayData(arr, currentPage, rows) {
	const oldDiv = document.querySelector('.root')
	if (oldDiv) oldDiv.remove()

	const rootDiv = document.createElement('div')
	rootDiv.classList.add('container')
	rootDiv.classList.add('root')

	const main = document.querySelector('main')
	main.append(rootDiv)

	for (let i = 0; i < arr.length; i++) {
		const h4 = document.createElement('h4')
		const p = document.createElement('p')
		h4.innerHTML = `${i + 1 + (currentPage - 1) * rows}. ${arr[i][0]}`
		p.innerHTML = arr[i][1]
		rootDiv.append(h4)
		rootDiv.append(p)
	}
	// let height = document.body.scrollHeight
	// window.scrollTo(0, height)
}

/////////////////

function pagination(currentPage) {
	let rows = 5

	const start = rows * (currentPage - 1)
	const end = start + rows
	const paginatedData = dataArr.slice(start, end)
	displayData(paginatedData, currentPage, rows)
	displayPagination(dataArr, currentPage, rows)
}

pagination(1)

////////////////

function displayPagination(arrData, currentPage, rowPerPage) {
	const oldUl = document.querySelector('.pagination')
	if (oldUl) oldUl.remove()

	const paginationEl = document.createElement('ul')
	paginationEl.classList.add('pagination')
	const nav = document.querySelector('nav')
	nav.append(paginationEl)
	const pagesCount = Math.ceil(arrData.length / rowPerPage)

	for (let i = 0; i < pagesCount; i++) {
		const liEl = document.createElement('li')
		liEl.classList.add('page-item')
		const atag = document.createElement('a')
		atag.classList.add('page-link')
		atag.setAttribute('href', '#')
		atag.innerHTML = i + 1
		liEl.appendChild(atag)
		paginationEl.appendChild(liEl)

		// `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`
		// paginationEl.insertAdjacentHTML('beforeend', liEl)

		if (currentPage === i + 1) {
			liEl.classList.add('active')
		}
	}
	createHandlers(pagesCount)
}

////////////////

function createHandlers(pagesCount) {
	const liEl = document.querySelectorAll('.page-item')
	for (let i = 0; i < pagesCount; i++) {
		liEl[i].addEventListener('click', (event) => {
			// console.log(event.target.parentNode)
			event.preventDefault()
			let currentPage = +event.target.innerHTML // 1,2,3,4
			pagination(currentPage)
		})
	}
}

/* 
1. Функция вывода обрезанного массива на экран
displayData

2. Функция навешивания обработчиков событий на все номера страниц

3. Функция пересчета пагинации

- построить простую пагинацию
- построить пагинацию с кнопка Prev & Next
*/
