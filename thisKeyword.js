//Without this keyword
let obj={
    eng:90,
    math:87,
    avg:function(eng,math){
            return (eng+math)/2;
    }
}
//o/p: NaN

console.log(obj.avg())

//USING this keyword
let obj={
    eng:90,
    math:87,
    avg:function(eng,math){
            return (eng+math)/2;
    }
}

console.log(obj.avg())

//o/p: 88.5