let inp = document.querySelector('input');
let btn = document.querySelector('button');

let body = document.querySelector('body');

let ol = document.createElement('ol');
body.append(ol);

btn.addEventListener('click', function () {

    let li = document.createElement('li');
    li.innerText = inp.value;

    ol.append(li);

    inp.value = "";

    let button = document.createElement('button');
    button.innerText = 'delete';

    li.append(button);

    button.addEventListener('click', function (e) {
        e.stopPropagation();
        li.remove();
    });

});

body.addEventListener('keydown', function (e) {

    if (e.key === 'Enter') {

        let li = document.createElement('li');
        li.innerText = inp.value;

        ol.append(li);

        inp.value = "";

        let button = document.createElement('button');
        button.innerText = 'delete';

        li.append(button);

        button.addEventListener('click', function (e) {
            e.stopPropagation();
            li.remove();
        });

    }

});

