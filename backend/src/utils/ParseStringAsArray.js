module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(trim => trim.trim())
}