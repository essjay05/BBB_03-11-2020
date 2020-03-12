//  URL: https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

// -- INSTRUCTIONS -- 
/*Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. Consonants are any letters of 
the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. 
We get: "z o d ia cs" */



/* -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, 
d = 4 and cs = 3 + 19 = 22. The highest is 26.

solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 
and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57. */

// PSEUDOCODE:
    // Assign a value to each letter of the value by incrementing by one with each letter
    // of the alphabet
    console.log("a".charCodeAt());

// SOLUTION
function solve(s) {
    return 0;
};

// SAMPLE TESTS
// describe("Basic tests", function(){
//     Test.assertEquals(solve("zodiac"),26);
//     Test.assertEquals(solve("chruschtschov"),80);
//     Test.assertEquals(solve("khrushchev"),38);
//     Test.assertEquals(solve("strength"),57);
//     Test.assertEquals(solve("catchphrase"),73);
//     Test.assertEquals(solve("twelfthstreet"),103);
//     Test.assertEquals(solve("mischtschenkoana"),80);
// });