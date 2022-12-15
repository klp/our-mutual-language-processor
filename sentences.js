const doc = nlp(originalText);

// return an array of sentences
const sentenceArray = doc.json().map(o=> o.text);

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const element = arr[randomIndex];
  return element;
}

console.log()

const randomSentence = getRandomElement(sentenceArray);

$("#select-random-phrase").append(randomSentence);
