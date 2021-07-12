// let re;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search
// console.log(re);
// console.log(re.source);

// // exec()- return result in an array or null

// const result = re.exec("brad hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);

// test() - returns true or false
// const result = re.test("Hello");

// console.log(result);

// match() - Return result array or null

// const str = "And Hello There";
// const result = str.match(re);
// console.log(result);

// search()  - returns index of the first match if not found returns -1

// const str = "and Hello there hello";
// const result = str.search(re);
// console.log(result);

// replace()  - Return new string with some or all matches of a pattern
// const str = "hello there";
// const newstr = str.replace(re, "Hi");
// console.log(newstr);
let re;
// literal Characters
re = /hello/;
re = /hello/i;

// Metacharacters Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /^hello$/i; // must end and begin with
re = /^h.llo$/i; // matches any one character
re = /h*llo/i; // matches any character or more times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i;

// Brackets []  - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[gf]ray/i; // Must be an g or f
re = /[^gf]ray/i; // Match anything except a G or F
re = /^[gf]ray/i; // first character can be g or f
re = /[A-Z]ray/; // can be any uppercase letter from A-Z
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // must occur exactly {m} times
re = /Hel{2,4}o/i; // must occur between {m,n} times
re = /Hel{2,}o/i; // must occur at least {m} times

// Parenthese () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/; // Word character - alphanumberic or _
re = /\w+/; // + will check for whole character
re = /\W/; // Non-word Character
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // Match any Non digit
re = /\s/; // match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell\b/i; // word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if not followed by y

// String to match
const str = "xjksk";

// log Results
const results = re.exec(str);
console.log(results);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not matches ${re.source}`);
  }
}

reTest(re, str);
