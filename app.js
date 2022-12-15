const doc = nlp(removedText);
const wordString = doc.text();
const cleanWordString = wordString.replaceAll('\n','')
const words = cleanWordString.split(' ');
const adjectives = doc.adjectives().out('array');
const adverbs = doc.adverbs().out('array');
const nouns = doc.nouns().out('array');
const verbs = doc.verbs().out('array');

const fullDoc = nlp(originalText);

// return an array of sentences
const sentenceArray = fullDoc.json().map(o=> o.text);

function getRandomElement(arr) {
  // random number between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * arr.length); 
  const element = arr[randomIndex];
  return element;
}

const randomSentence = getRandomElement(sentenceArray);

const outputAdjectives = adjectives.map(function(adjective){
    return adjective;
});

const outputAdverbs = adverbs.map(function(adverb){
    return adverb;
});

const outputNouns = nouns.map(function(noun){
    return noun;
});

const outputVerbs = verbs.map(function(verb){
    return verb;
});

const outputWords = words.map(function(word){
    return word;
})

outputAdjectives.forEach(function(adjective) {
    $("#adjectives").append(adjective + ", ");
});

outputAdverbs.forEach(function(adverb) {
    $("#adverbs").append(adverb + ", ");
});

outputNouns.forEach(function(noun) {
    $("#nouns").append(noun + ", ");
});

outputVerbs.forEach(function(verb) {
    $("#verbs").append(verb + ", ");
});



const adjectiveCount = outputAdjectives.length;
const adverbCount = outputAdverbs.length;
const nounCount = outputNouns.length;
const verbCount = outputVerbs.length;
const wordCount = outputWords.length;
const sentenceCount = sentenceArray.length;

$("#adjective-count").append(adjectiveCount);
$("#adverb-count").append(adverbCount);
$("#noun-count").append(nounCount);
$("#verb-count").append(verbCount);
$("#word-count").append(wordCount);
$("#sentence-count").append(sentenceCount);
$("#select-random-phrase").append(randomSentence);




