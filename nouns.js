const doc = nlp(removedText);
const nouns = doc.nouns().out('array');

const outputNouns = nouns.map(function(noun){
    return noun;
});

outputNouns.forEach(function(noun) {
    $("#nouns").append("<li>" + noun + "</li>");
});