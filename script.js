//Endpoint: https://api.adviceslip.com/advice

const text = document.querySelector(".text p");
const button = document.querySelector(".dice")
const id = document.querySelector(".id-advice")
function callAPI (){
    fetch("https://api.adviceslip.com/advice").then(function (res){
        return res.json()
    }
).then(function(data) {
   text.innerHTML=data.slip.advice;
   id.innerHTML=data.slip.id;
});
}

button.addEventListener("click", function(){
    callAPI();
});

callAPI();




