const doc = nlp(removedText);
const adjectives = doc.adjectives().out('array');
const outputAdjectives = adjectives.map(function(adjective){
    return adjective;
});

outputAdjectives.forEach(function(adjective) {
    $("#adjectives").append(adjective + ", ");
});