const doc = nlp(removedText);
const verbs = doc.verbs().out('array');

const outputVerbs = verbs.map(function(verb){
    return verb;
});

outputVerbs.forEach(function(verb) {
    $("#verbs").append(verb + ", ");
});
