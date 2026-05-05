let inp=document.querySelector('input');
inp.addEventListener('input',function(){
    let h1=document.querySelector('h1');
    h1.innerText=inp.value;
})