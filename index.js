function receivesAFunction(spy) {
    return spy()
}

function returnsANamedFunction() {
    return function namedFunction() {
        return 'hi'
    }
}
function returnsAnAnonymousFunction() {
    return function (spy) {
        return spy()
    }
}