let content = document.querySelector('.modal');
let over = document.querySelector('.overlay');
let pro = document.querySelector('img');
let cir = document.querySelector('circle1');
let circ = document.querySelector('circle2');
function openModal()
{
    console.log("clicked");
    content.classList.add("active");
    over.classList.add("overlayactive");
    pro.classList.add('blur');
    cir.classList.add('blurc');
    circ.classList.add('blurc');
}

function closeModal()
{
    console.log("closed");
    content.classList.remove("active");
   over.classList.remove("overlayactive");
   pro.classList.remove("blur");
   cir.classList.remove('blurc');
   circ.classList.remove('blurc');
}


