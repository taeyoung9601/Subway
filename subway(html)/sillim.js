

const sillim1 = document.querySelector('.sillim1');
const sillim2 = document.querySelector('.sillim2');
const sillim3 = document.querySelector('.sillim3');
const sillim4 = document.querySelector('.sillim4');

const background = document.querySelector('.modal');

const content1 = document.querySelector('.modal-content1');
const content2 = document.querySelector('.modal-content2');
const content3 = document.querySelector('.modal-content3');
const content4 = document.querySelector('.modal-content4');

sillim1.addEventListener('click', () => {
    background.classList.toggle("imgClicked");
    content1.classList.toggle("imgClicked");
});

// sillim2 클릭 시 imgClicked 토글
sillim2.addEventListener('click', () => {
    background.classList.toggle("imgClicked");
    content2.classList.toggle("imgClicked");
});

// sillim3 클릭 시 imgClicked 토글
sillim3.addEventListener('click', () => {
    background.classList.toggle("imgClicked");
    content3.classList.toggle("imgClicked");
});

// sillim4 클릭 시 imgClicked 토글
sillim4.addEventListener('click', () => {
    background.classList.toggle("imgClicked");
    content4.classList.toggle("imgClicked");
});

// background 클릭 시 imgClicked 클래스 제거
background.addEventListener('click', () => {
    console.log("zz");
    background.classList.remove("imgClicked");
    content1.classList.remove("imgClicked");
    content2.classList.remove("imgClicked");
    content3.classList.remove("imgClicked");
    content4.classList.remove("imgClicked");
});