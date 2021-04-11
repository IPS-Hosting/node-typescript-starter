import { fibonacci } from './fibonacci'

async function main() {
	console.log('Hello')
	await new Promise((resolve) => setTimeout(resolve, 1000))
	console.log('World')
	console.log(`fibonacci(12) = ${fibonacci(12)}`)
}

void main()
