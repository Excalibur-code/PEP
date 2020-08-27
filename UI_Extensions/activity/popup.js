console.log("hello from popup.js");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".btn");

btn.addEventListener("click",async function () {
     //send message
     let tobeBlocked = input.value;
     if(tobeBlocked){
          await sendMessage(tobeBlocked);
          let li = document.createElement("li");
          li.setAttribute("class", "list-group-item");
          li.innerHTML = tobeBlocked + '<i class="fas fa-times>"</i>';
          ul.appendChild(li);
          input.value = '';

          let i = li.querySelector("i");
          i.addEventListener("click", function () {
             i.parentNode.remove(); 
          })
     }
})

//popup
function sendMessage (tobeBlocked) {
     return new Promise ( function(resolve, reject) {
         chrome.runtime.sendMessage(tobeBlocked, function (response) {
              resolve(response);
         });
     })
}