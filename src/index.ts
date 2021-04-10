async function main() {
	console.log('Hello')
	await new Promise((resolve) => setTimeout(resolve, 1000))
	console.log('World')
}

void main()
