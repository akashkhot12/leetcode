function capitalizeTitle(title) {
    var sentence = title.split(" ");
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var sentences = sentence_1[_i];
        var firstLetter = sentences.substring(0, 1);
        firstLetter = firstLetter.toUpperCase();
        console.log(firstLetter);
    }
    return title;
}
;
console.log(capitalizeTitle("akash khot the great man "));
