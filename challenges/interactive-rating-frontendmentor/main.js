
const buttons = document.querySelectorAll(".button-item");

let number = 5;

for (const button of buttons) {
    const data = button.textContent;
  button.addEventListener('click', function(event) {
    number = data;
    console.log(number)
  })
}

const submit = document.querySelector(".button-submit");

submit.addEventListener("click", function(){    
    document.querySelector(".rating-container").style.display = "none";
    document.querySelector(".ty-text").innerHTML = 'You selected '+number+ ' out of 5';
    document.querySelector(".ty-container").style.display = "block";
})
