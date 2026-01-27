/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   
     let num1 = []
    let num2 = []
    for (let i = 0; i < s.length; i++) {
        num1.push(s[i].charCodeAt(0) - 96)

    }
    for (let i = 0; i < t.length; i++) {
        num2.push(t[i].charCodeAt(0) - 96)

    }
   
    return [...num1].sort().join('') === [...num2].sort().join('');


};