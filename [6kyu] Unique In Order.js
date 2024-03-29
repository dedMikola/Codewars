// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


let uniqueInOrder = function (iterable) {
    let newArr = [];
    if (Array.isArray(iterable)) {
        iterable.map((item) => {
            if (String(item) !== String(newArr.slice(-1))) {
                newArr.push(item);
            }
        })
    } else {
        String(iterable).split("").map((item) => {
            if (String(item) !== String(newArr.slice(-1))) {
                newArr.push(item)
            }
        })
    }
    return newArr
}


// Best practices:
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
