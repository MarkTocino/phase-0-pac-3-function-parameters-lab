function introduction(name) {
    return (`Hi, my name is ${name}.`);
};
introduction("Aki");
function introductionWithLanguage(value1, value2) {
    return (`Hi, my name is ${value1} and I am learning to program in ${value2}.`)
}
introductionWithLanguage("Aki", "Ember.js")
function introductionWithLanguageOptional (value1, value2 = "JavaScript") {
    return `Hi, my name is ${value1} and I am learning to program in ${value2}.`
}
introductionWithLanguageOptional("Gracie")