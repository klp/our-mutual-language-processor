const doc = nlp(removedText);
const adverbs = doc.adverbs().out('array');

const outputAdverbs = adverbs.map(function(adverb){
    return adverb;
});

outputAdverbs.forEach(function(adverb) {
    $("#adverbs").append(adverb + ", ");
});