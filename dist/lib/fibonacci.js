/**
 * An implementation of the fibonacci row.
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_sequence}
 * @param n - The number for which to calculate the fibonacci value. Values will be ceiled.
 * @returns The fibonacci value for the given number.
 */
export function fibonacci(n) {
    const i = Math.ceil(n);
    if (i <= 0)
        return 0;
    if (i <= 2)
        return 1;
    return fibonacci(i - 1) + fibonacci(i - 2);
}
//# sourceMappingURL=fibonacci.js.map