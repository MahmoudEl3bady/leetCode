function memoize(fn) {
    const memo = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in memo) {
            return memo[key];
        } else {
            const result = fn(...args);
            memo[key] = result; 
            return result;
        }
    };
}

function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

function memoizedFn(fnName) {
    switch (fnName) {
        case "sum":
            return memoize(sum);
        case "fib":
            return memoize(fib);
        case "factorial":
            return memoize(factorial);
        default:
            throw new Error("Unsupported function name");
    }
}

function processActions(fnName, actions, values) {
    const result = [];
    const fn = memoizedFn(fnName);

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i];

        switch (action) {
            case "call":
                result.push(fn(...value));
                break;
            case "getCallCount":
                result.push(Object.keys(fn.cache).length);
                break;
            default:
                throw new Error("Unsupported action");
        }
    }

    return result;
}

