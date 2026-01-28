/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
     const groups = new Map();

    for (const word of strs) {
        // build frequency
        const freq = {};
        for (const ch of word) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        // canonical key
        const key = Object.keys(freq) .sort() .map(k => `${k}:${freq[k]}`) .join("|");
        // group
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        
        groups.get(key).push(word);
    }

    return Array.from(groups.values());
};