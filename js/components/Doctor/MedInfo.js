export class PriorityList {
	constructor() {
		return [
			{ value: 'low', textContent: 'Обычная' },
			{ value: 'medium', textContent: 'Приоритетная' },
			{ value: 'high', textContent: 'Неотложная' },
		]
	}
}

export class DoctorList {
	constructor() {
		return [
			{
				textContent: 'Кардиолог',
				value: 'cardiologist',
			},
			{
				textContent: 'Терапевт',
				value: 'therapist',
			},
			{
				textContent: 'Стоматолог',
				value: 'dentist',
			},
		]
	}
}
