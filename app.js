function preFizz(n) {
    let myArr = [];
    for (var i = 1; i <= n; i++) {
        myArr.push(i);
    }
    return myArr;
}

console.log(preFizz(1)); // [1]
console.log(preFizz(2)); // [1,2]
console.log(preFizz(3)); // [1,2,3]
console.log(preFizz(4)); // [[1,2,3,4]
console.log(preFizz(5)); // [1,2,3,4,5]