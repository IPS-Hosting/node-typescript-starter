import { fibonacci } from './lib/fibonacci.js';
console.log('Hello');
// Top-level await is supported
await new Promise((resolve) => setTimeout(resolve, 1000));
console.log('World');
console.log(`fibonacci(12) = ${fibonacci(12)}`);
//# sourceMappingURL=main.js.map