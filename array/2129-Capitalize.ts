// function capitalizeTitle(title: string): any {
// const sentence =title.split(" ")
// const newArray=[]
// for(const sentences of sentence){
//    let firstLetter=sentences.substring(0, 1)
//    firstLetter=firstLetter.toUpperCase() 
//    let restLetter=sentences.substring(1)
//    newArray.push(firstLetter + restLetter)
// }
//    return newArray.join(" ")
// };
// console.log(
//     capitalizeTitle("akash khot the great man")
// )


function capitalizeTitle(title : String): String {
    const words = title.split(" ");
    const capitalizedWords = words.map(word => {
        if (word.length <= 2) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });
    return capitalizedWords.join(" ");
};
console.log(
    capitalizeTitle("akash khot is the great man")
    );

