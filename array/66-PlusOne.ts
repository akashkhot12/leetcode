function plusOne(digits: number[]):any{
    let arr=(BigInt(digits.join("")) + BigInt(1)).toString();
    const arrayOfDigits = Array.from(String(arr));
    return arrayOfDigits ;    
};

let a1=plusOne([1,9,9])
console.log(a1)




