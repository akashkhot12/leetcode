function singleNumber(nums: number[]): any {
for(let i =0 ;i<=nums.length;i++){
    if(i!=nums[i]){
        return i;
    }
}
};

let a1 = singleNumber([2,2,1])
console.log(a1);

