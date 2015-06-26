//run it in firefox nightly v41.0a1 (2015-06-25)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*
// The yield* expression is used to delegate to another generatorerator or iterable object.

function* foo() {
    yield 'bar';
}

function* generator() {
    yield [-1, 0]
    yield* [1, 2];

    yield* "34";

    yield* Array.from(arguments);
    yield* foo();
}

var iterator = generator(5, 6);
console.log(iterator.next()); // { value: Array[2], done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: 'bar', done: true }
console.log(iterator.next()); // { value: undefined, done: true }
