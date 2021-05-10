export const getInputValue = element => document.querySelector(element).value

export const getFormData = form => {
	const fd = new FormData(form)
	return [...fd.keys()].reduce((a, key) => ((a[key] = fd.get(key)), a), {})
}
export const ignoreKey = (obj, ...keys) =>
	Object.keys(obj).reduce(
		(acc, key) => (
			!keys.some(k => k === key) ? (acc[key] = obj[key]) : acc, acc
		),
		{},
	)

export const destroyModal = () => {
	const modals = document.querySelectorAll('#modal')
	const last = document.querySelectorAll('#modal').length - 1
	document.body.classList.remove('open-modal')
	modals[last].remove()
}
