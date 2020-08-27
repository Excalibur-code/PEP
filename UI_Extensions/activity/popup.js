console.log("hello from popup.js");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".btn");

btn.addEventListener("click",async function () {
     //send message
     let tobeBlocked = input.value;
     if(tobeBlocked){
           await sendMessage({
                 type : "url",
                 link : tobeBlocked
           });
           addToList(tobeBlocked);
           input.value = '';      
     }
})

//popup
//IIFEE-immediately invoked function expression => db => UI
async function init() {
      let blockList = await sendMessage({ type: "getList" });
     for (let i = 0; i < blockList.length; i++) {
         addToList(blockList[i].site);
     }
 }
 init();
//falsy values => "", null, false, 0, undefined
//utils
function sendMessage (tobeBlocked) {
     return new Promise ( function(resolve, reject) {
         chrome.runtime.sendMessage(tobeBlocked, function (response) {
              resolve(response);
         });
     })
}

function addToList(tobeBlocked) {
      let li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerHTML = tobeBlocked + '<i class="fas fa-times>"</i>';
      ul.appendChild(li);

      let i = li.querySelector("i");
          i.addEventListener("click", function () {
                //send message remove 
                i.parentNode.remove(); 
          })
}