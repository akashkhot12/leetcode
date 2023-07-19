function plusOne(digits) {
    var arr = (parseInt(digits.join("")) + 1).toString();
    return arr;
}
;
var a1 = plusOne([1, 9, 9]);
console.log(a1);
