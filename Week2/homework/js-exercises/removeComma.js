let myString = 'hello,this,is,a,difficult,to,read,sentence';

let withoutCommas = myString.replaceAll(/,/g, ' ');

console.log(withoutCommas);