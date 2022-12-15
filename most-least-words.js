const doc = nlp(removedText);

const wordArray = doc.words().out('array');

console.log(wordArray);