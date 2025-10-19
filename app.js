const b = document.querySelector('button.button--no');
b.addEventListener("mouseover", moveHover);

function moveHover(){
    const i = Math.floor(Math.random() * 70) + 10; 
    const j = Math.floor(Math.random() * 60) + 20; 
    b.style.position = "absolute";
    b.style.left = i + "vw";
    b.style.top = j + "vh";
}

let btnyes = document.querySelector('.button--yes');
let mail = document.querySelector('.mail');

btnyes.onclick = function(){
    mail.classList.toggle('active');
};
