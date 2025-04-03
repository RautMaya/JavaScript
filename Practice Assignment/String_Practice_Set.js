console.log("har\"".length);

const sentence = `In a play ground Gita and Sita are playing a Cricket.`;
const word = `Cricket`;

console.log(`The word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the Sentsnce`);

console.log(`The sentence "${word}" ${sentence.startsWith(word) ?'is start' : 'is not start'} in the sentence`);

console.log(`The sentence "${word}" ${sentence.endsWith(word)? 'is end' : 'is not end' }in The Sentence`);

console.log(sentence.toUpperCase());

let sen2 = 'Please give me RS 1000 ';

let amount = sen2.slice(17,22);
console.log(amount);
let amount1 = sen2.slice(sen2.length);
console.log(amount);

let Friend = "Deepika";
console.log(Friend);

Friend[1] = "H";
console.log(Friend);/// In a javascript We are do not change String 
