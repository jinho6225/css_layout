// javascript
/*
        <div class="container">
            <img src="previous.svg" class="previous" alt="previous image">
            <div class="gallery-wrapper">
                <div class="gallery">
                    <img class="card current" src="presents.jpg" alt="Christmas Cookies">
                    <img class="card" src="cookies.jpg" alt="Christmas Cookies">
                    <img class="card" src="santa.jpg" alt="Christmas Cookies">
                    <img class="card" src="candycane.jpg" alt="Christmas Cookies">
                    <img class="card" src="reindeer.jpg" alt="Christmas Cookies">
                </div>
            </div>
            <img src="next.svg" class="next" alt="next image">
        
        </div>
*/


const leftArr = document.querySelector('.container > .previous')
const rightArr = document.querySelector('.container > .next')

function eventHandler() {
    let currentNum = 0;   
    leftArr.addEventListener('click', ()=> { 
        if (currentNum > 0) {
            currentNum -= 220
        } else {
            currentNum = 880
        }
        myFunction(currentNum)
    })
    rightArr.addEventListener('click', ()=> {
        if (currentNum < 880) {
            currentNum += 220
        } else {
            currentNum = 0
        }
        myFunction(currentNum)
    })
}

function myFunction(num) {
    document.querySelector(".gallery").style.transform = `translateX(-${num}px)`;
}

function init() {

    eventHandler()
    
}

init()