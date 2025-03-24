

const image1 = document.querySelector('.content1 img');
const image2 = document.querySelector('.content2 img');
const image3 = document.querySelector('.content3 img');
const image4 = document.querySelector('.content4 img');


image1.addEventListener('click' , () => {

    const textbox1 = document.querySelector('.text1');

    textbox1.classList.toggle('text1_on');
});


image2.addEventListener('click' , () => {

    const textbox2 = document.querySelector('.text2');

    textbox2.classList.toggle('text2_on');
});


image3.addEventListener('click' , () => {

    const textbox3 = document.querySelector('.text3');

    textbox3.classList.toggle('text3_on');
});


image4.addEventListener('click' , () => {

    const textbox4 = document.querySelector('.text4');

    textbox4.classList.toggle('text4_on');
});