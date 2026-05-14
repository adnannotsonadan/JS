function check(email,pw){
    return new Promise((resolve,reject)=>{
        console.log('checking credentials....');
        if(email===user.email && pw===user.pw){
            setTimeout(()=>{
                resolve('Login Successful');
            },2000)
        }else{
            reject('login Failed');
        }
    })
}

const user={
    email:'mohammad',
    pw:123
}
check('mohammad',123)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })