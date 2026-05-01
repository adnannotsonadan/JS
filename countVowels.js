let str = 'abcdabcdefgggh';
let s='';

for (let ch of str){
    if (s.includes(ch)){
        continue;
    }else{
        s+=ch;
    }
}
console.log(s);