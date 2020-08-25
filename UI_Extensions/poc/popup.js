console.log("Inside popup");
let btn = document.querySelector(".click");
btn.addEventListener("click", function () {
console.log("Popup btn was clicked");
console.log("yha se content change ");
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {//search google for explaination
         console.log(tabs);// 
         // to send message
         chrome.tabs.sendMessage(tabs[0].id, "hello from popup",function(response) {//search google for explaination
        //send the message to the active tab using the tab id recieved from the qurey func.
                      console.log(response);
         });
     })
})