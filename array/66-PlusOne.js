function plusOne(digits) {
    var arr = (BigInt(digits.join("")) + BigInt(1)).toString();
    var arrayOfDigits = Array.from(String(arr));
    return arrayOfDigits;
}
;
var a1 = plusOne([1, 9, 9]);
console.log(a1);
