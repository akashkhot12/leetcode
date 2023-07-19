function capitalizeTitle(title: string): any {
const sentence =title.split(" ")
for(const sentences of sentence){
   let firstLetter=sentences.substring(0, 1)
   firstLetter=firstLetter.toUpperCase()
   console.log(firstLetter);
}
   return title

};

console.log(
    capitalizeTitle("akash khot the great man ")
)
