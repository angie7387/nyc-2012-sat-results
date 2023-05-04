const btns = document.querySelectorAll('buttons button');
const imgs = document.querySelectorAll('.images div');

for(let i=1; i < btns.length; i++) {
    btns [i].addEventListener('click', filterDiv);
}

function setActiveBtn(e) {
    btns.forEach (btn =>  {
        btn.classList.remove('btn-clicked');
    });
}

e.target.classList.add('btn-clicked');


function filterDiv(e) {

setActiveBtn(e);

divs.forEach (div => {
    div.classList.remove('div-shrink');
    div.classList.add('div-expand')

const divType = parseInt(div.dataset.div);

const btnType = parseInt(e.target.dataset.btn);

if(divType !== btnType) {
    div.classList.remove('div-expand');
    div.classList.add ('div-shrink');
}
});

}

btns[0].addEventListener('click', (e) => {
    setActiveBtn(e);

    divs.forEach(div => {
        div.classList.remove('div-shrink');
        div.classList.add('div-expanded');
    });
});
