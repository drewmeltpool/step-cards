import { medData } from './medData.js'

const visit = {
	options: [
		{
			input: {
				type: 'text',
				name: 'goal',
				placeholder: 'Цель визита',
			},
		},
		{
			input: {
				type: 'text',
				name: 'title',
				placeholder: 'Описание',
			},
		},
		{
			select: {
				className: 'select form__select',
				name: 'priority',
				options: [...medData.priority],
			},
		},
		{
			input: {
				type: 'text',
				name: 'patient',
				placeholder: 'ФИО',
			},
		},
	],
}

export const formUtils = {
	login: {
		options: [
			{
				input: {
					name: 'email',
					type: 'email',
					placeholder: 'Введите почту',
					id: 'email',
				},
			},
			{
				input: {
					name: 'password',
					type: 'password',
					placeholder: 'Введите пароль',
					id: 'password',
				},
			},
			{ button: { textContent: 'Вход' } },
		],
	},
	edit: {
		title: 'Редактировать',
		options: [
			...visit.options,
			{
				input: { type: 'number', name: 'age', placeholder: 'Возраст' },
			},
			{
				input: {
					type: 'number',
					name: 'pressure',
					placeholder: 'Обычное давление',
				},
			},
			{
				input: {
					type: 'number',
					name: 'weightindex',
					placeholder: 'Индекс массы тела',
				},
			},
			{
				input: {
					type: 'text',
					name: 'heartdisease',
					placeholder: 'Перенесенные заболевания С-С системы',
				},
			},
		],
	},
	filter: {
		className: 'filter-form',
		options: [
			{
				input: {
					className: 'filter-input',
					id: 'filter-input',
					placeholder: 'Поиск',
					name: 'title',
				},
			},
			{
				select: {
					className: 'select filter-select',
					id: 'filter-doctor',
					name: 'doctor',
					options: [{ textContent: 'Все', value: 'all' }, ...medData.doctors],
				},
			},
			{
				select: {
					className: 'select filter-select',
					id: 'filter-priority',
					name: 'priority',
					options: [{ textContent: 'Все', value: 'all' }, ...medData.priority],
				},
			},
			{
				button: { className: 'btn filter-btn', textContent: 'Поиск' },
			},
		],
	},
	visitCardiologist: {
		title: 'Кардиолог',
		options: [
			...visit.options,
			{
				input: { type: 'number', name: 'age', placeholder: 'Возраст' },
			},
			{
				input: {
					type: 'number',
					name: 'pressure',
					placeholder: 'Обычное давление',
				},
			},
			{
				input: {
					type: 'number',
					name: 'weightindex',
					placeholder: 'Индекс массы тела',
				},
			},
			{
				input: {
					type: 'text',
					name: 'heartdisease',
					placeholder: 'Перенесенные заболевания С-С системы',
				},
			},
			{ button: { textContent: 'Создать карточку' } },
		],
	},
	visitDentist: {
		title: 'Стоматолог',
		options: [
			...visit.options,
			{
				input: {
					type: 'date',
					name: 'lastVisit',
					placeholder: 'Дата последнего визита',
				},
			},
			{ button: { textContent: 'Создать карточку' } },
		],
	},
	visitTherapist: {
		title: 'Терапевт',
		options: [
			...visit.options,
			{
				input: { type: 'number', name: 'age', placeholder: 'Возраст' },
			},
			{ button: { textContent: 'Создать карточку' } },
		],
	},
}

// new Form('Редактировать карточку')
// 	.select({
// 		id: 'doctor',
// 		options: [...new DoctorList()].find(
// 			item => item.value === obj.doctor.specialization,
// 		),
// 		...new DoctorList().filter(
// 			item => item.value !== obj.doctor.specialization,
// 		),
// 	})
// 	.select({
// 		id: 'priority',
// 		options: [...new PriorityList()].find(item => item.value === obj.priority),
// 		...new PriorityList().filter(item => item.value !== obj.priority),
// 	})
// 	.input({
// 		value: obj.patient,
// 		id: 'fullname',
// 		type: 'text',
// 		placeholder: 'ФИО',
// 	})
// 	.input({
// 		value: obj.goal,
// 		id: 'goal',
// 		type: 'text',
// 		placeholder: 'Цель визита',
// 	})
// 	.input({
// 		value: obj.description,
// 		id: 'description',
// 		type: 'text',
// 		placeholder: 'описание визита',
// 	})
// 	.input({
// 		id: 'date',
// 		value: obj.date,
// 		type: 'date',
// 		placeholder: 'Дата',
// 	})
// 	.input({
// 		value: obj.pressure,
// 		id: 'pressure',
// 		type: 'number',
// 		placeholder: 'Обычное давление',
// 	})
// 	.input({
// 		value: obj.bodyIndex,
// 		id: 'weightindex',
// 		type: 'number',
// 		placeholder: 'Индекс массы тела',
// 	})
// 	.input({
// 		value: obj.heartDisease || '',
// 		id: 'heartdisease',
// 		type: 'text',
// 		placeholder: 'Перенесенные заболевания С-С системы',
// 	})
// 	.input({
// 		value: obj.age,
// 		id: 'age',
// 		type: 'number',
// 		placeholder: 'Возраст',
// 	})
// 	.button({ textContent: 'Редактировать' })
// 	.submit(async () => {
// 		const loader = new Loader()
// 		loader.render()
// 		const name = [...document.querySelector('#doctor').children].find(
// 			item => item.value === document.querySelector('#doctor').value,
// 		).textContent

// 		const data = {
// 			doctor: {
// 				name,
// 				specialization: getInputValue('#doctor'),
// 			},
// 			goal: getInputValue('#goal'),
// 			description: getInputValue('#description'),
// 			priority: getInputValue('#priority'),
// 			patient: getInputValue('#fullname'),
// 			date: getInputValue('#date'),
// 			pressure: getInputValue('#pressure'),
// 			weight: getInputValue('#weightindex'),
// 			heartDisease: getInputValue('#heartdisease'),
// 			age: getInputValue('#age'),
// 		}
// 		const api = new Api()
// 		const card = await api.editCard(data, id)
// 		new PatientList().edit(id, card)
// 		loader.remove()
// 		destroyModal()
// 	})
