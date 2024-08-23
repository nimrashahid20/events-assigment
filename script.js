//1. Show an alert box on click on a link.

const linked = document.getElementById("link")
linked.addEventListener("click", () => {
    alert("Welcome");
});

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user. 

const mobile1 = document.getElementById("pic1")
mobile1.addEventListener("click", () => {
    alert("this is Iphone");
});

const mobile2 = document.getElementById("pic2")
mobile2.addEventListener("click", () => {
    alert("  this is Smartphone");
});

const mobile3 = document.getElementById("pic3")
mobile3.addEventListener("click", () => {
    alert("this is samrtpone");
});

//3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.


function deleterow(button){
    const Row = button.parentElement.parentElement;
    Row.remove();
}

//4.Display an image in browser. Change the picture on mouseover and set the
//first picture on mouseout.

function imageSwap(){
const car = document.getElementById("car1").src="./images/car2.jpg"
}


function imageswap(){
    const car1 = document.getElementById("car2").src="./images/car1.jpg"
    }

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let counterValue = 0;
const counterdisplay = document.getElementById("counter");
const increasebutton = document.getElementById("increaseBtn");
const decreasebutton = document.getElementById("decreaseBtn");

function updateCounter() {
    counterdisplay.textContent = counterValue;
}


increasebutton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});


decreasebutton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
})                        




















