document.addEventListener('DOMContentLoaded', function() {
    const btnNo = document.querySelector('.btn_no');
    const btnNoMsg = document.querySelector('.btn_no-msg');
    const btnSi = document.querySelector('.btn_si');
    const cardFront = document.querySelector('.card__front');
    const cardBack = document.querySelector('.card__back');

btnNo.addEventListener('click', function() {
    btnNoMsg.style.display = 'block';
    btnNo.style.display = 'none';
});

btnSi.addEventListener('click', function(){
    cardFront.style.transform = 'perspective(1200px) rotateY(180deg)';
    cardBack.style.transform = 'perspective(1200px) rotateY(360deg)';
});

});