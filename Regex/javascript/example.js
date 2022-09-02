// 1

let p = /prince/;
console.log(p.source);

// 2

/*

exec() This function will return an array for match or null for no match.

g means global 
i means case insensitive

*/

let reg = /prince/g;
reg = /prince/i;

let str = 'This is great code with prince. prince is also software enginner';

console.log(reg.exec(str), str, reg.source);

// 3

/*

test function will only print true if the reg is there in the string 

*/

console.log(reg.test(str), str, reg.source);

// 4

/*

match function will return array of result or null

*/

console.log(str.match(reg), str, reg.source);

// 5

/*

search function will return index of match else -1

*/

console.log(str.search(reg), str, reg.source);

// 6

/*

replace function will return replaced string with all the replacements

*/

console.log(str.replace(reg, 'rajan'), str, reg.source);

// 7

/*

^ start with
$ ends with
. any one character
* any one or more character
? available or not available

*/

let metaStr = 'prince is prince';

let metaReg = /^prince/;
console.log(metaReg.test(metaStr), metaStr, metaReg.source);

metaReg = /ce$/;
console.log(metaReg.test(metaStr), metaStr, metaReg.source);

metaReg = /pri.ce/;
console.log(metaReg.test(metaStr), metaStr, metaReg.source);

metaReg = /pr*nce/;
console.log(metaReg.test(metaStr), metaStr, metaReg.source);

metaReg = /pri?nce/;
console.log(metaReg.test(metaStr), metaStr, metaReg.source);

// 8

/*

[aeion]  can be in brackets
[a-f]    can be any in a to f
[^aeion] can not be in brackets

*/

let charStr = 'prince is prince';

let charReg = /pr[aeion]nce/;
console.log(charReg.test(charStr), charStr, charReg.source);

charReg = /pr[a-f]nce/;
console.log(charReg.test(charStr), charStr, charReg.source);

charReg = /pr[^aeion]nce/;
console.log(charReg.test(charStr), charStr, charReg.source);

// 8

/*

{2}      r can occur exactly 2 times
{0,2}    r can occur 0 to 2 times

*/

let qunStr = 'prince is prince';

let qunReg = /pri{0,2}nce/;
console.log(qunReg.test(qunStr), qunStr, qunReg.source);

// 9

/*

\w  word character
\w+ one or more word characters
\W  non word character
\W+ more than non word characters
\d  digit character
\D  non digit character
\D+ more than non digit character
\s  white space
\s+ one ot more than one white space
\S  non white space

*/

let wodStr = 'prince &&*@ce number  19998prn99092323';

let wodReg = /\wri/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\w+ri/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\Wri/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\W+ce/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\d999/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\d+/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\D99/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\D+99/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\snumber/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\s+19998/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);

wodReg = /\S+ce number/;
console.log(wodReg.test(wodStr), wodStr, wodReg.source);