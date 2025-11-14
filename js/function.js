const isNormalLength = function (string, maxLength) {
    if (string.length <= maxLength) {
        return true
    }
    return false
}

const isPolyndrom = function(word) {
    word = word.replaceAll(" ", "").toLowerCase()
    if (word === word.split("").reverse().join("")) {
        return true
    }
    return false
}

const onlyDigits = function(string) {
    number = ""
    for (char of String(string)) {
        if (!isNaN(parseInt(char))) {
            number += char
        }
    }
    return parseInt(number)
}