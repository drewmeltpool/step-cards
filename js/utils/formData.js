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
			textArea: {
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
					name: 'weight',
					placeholder: 'Индекс массы тела',
				},
			},
			{
				input: {
					type: 'text',
					name: 'heartDisease',
					placeholder: 'Перенесенные заболевания С-С системы',
				},
			},
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
		],
	},
	visitTherapist: {
		title: 'Терапевт',
		options: [
			...visit.options,
			{
				input: { type: 'number', name: 'age', placeholder: 'Возраст' },
			},
		],
	},
}
