//Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols
let text = 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.'

let slicedText = text.split(" ");

let T_2_arr = slicedText
    .filter(word => word.length > 2)
    .filter(word => word[0] == 't');
console.log(T_2_arr);