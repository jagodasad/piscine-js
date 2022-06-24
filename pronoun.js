function pronoun(str) {
    const words = str.split(/[\s,]+/)
    const res = {}
    words.forEach((word, index) => {
        word = word.toLowerCase()
        if (isPronoun(word)) {
            if (!res[word]) res[word] = { word: [], count: 0 }
            if (index !== words.length - 1 && !isPronoun(words[index + 1])) {
                res[word].word.push(words[index + 1])
            }
            res[word].count++
        }
    })
    return res
}

function isPronoun(str) {

}    