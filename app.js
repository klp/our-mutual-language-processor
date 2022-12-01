const doc = nlp(originalText);
const adjectives = doc.adjectives().out('array');
const adverbs = doc.adverbs().out('array');
const nouns = doc.nouns().out('array');
const verbs = doc.verbs().out('array');

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

const adjectiveCount = outputAdjectives.length;
const adverbCount = outputAdverbs.length;
const nounCount = outputNouns.length;
const verbCount = outputVerbs.length;

console.log(`# of adjectives: ${adjectiveCount}`);
console.log(`# of adverbs: ${adverbCount}`);
console.log(`# of nouns: ${nounCount}`);
console.log(`# of verbs: ${verbCount}`);



