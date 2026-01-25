/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
   
    let set = new Set('aeiou')

    const hash = {
        vowels: {},
        consonants: {}
    };

    for (let ch of s) {
        if (set.has(ch)) {
            hash.vowels[ch] = (hash.vowels[ch] || 0) + 1;
        } else {
            hash.consonants[ch] = (hash.consonants[ch] || 0) + 1;
        }

    }


    const maxVowels = Math.max(0, ...Object.values(hash.vowels));
    const maxConsonants = Math.max(0, ...Object.values(hash.consonants));

    return maxVowels + maxConsonants


};