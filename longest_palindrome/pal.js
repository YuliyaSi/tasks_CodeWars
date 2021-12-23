longestPalindrome=function(s){
 let arr = s.split('').filter(i => i!=' '),
str1 = s.split('').reverse().join(''),
subarr = [],
substr = '',
resultArr = [];
  
  if(arr.length == 0) return 0;
  
for(let i=0; i < arr.length; i++) {
subarr.push(arr[i]);
substr = subarr.join('')
if(~str1.indexOf(substr)) {
subarr;
resultArr.push(subarr.join(''))
} else {
let j = subarr.pop()
resultArr.push(subarr.join(''))
subarr = []
subarr.push(j)
}
}
resultArr.map(i => i.length)
let pal = Math.max(...resultArr.map(i => i.length))
return pal;
}
