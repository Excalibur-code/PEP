console.log("I will always run");
function changeImages () {
     let imgArr = document.querySelectorAll("img");//selects all img tags from the html of the webpage
     let images = ["images/img-1.png",
                   "images/img-2.jpeg",
                   "images/img-3.jpeg",
                   "images/img-4.jpeg",
                   "images/img-5.png"];//all images in folder

     for(let i=0; i < imgArr.length; i++) {
          //console.log(chrome.extension.getURL(images[0]));
          let idx = Math.floor(Math.random() * images.length);
          let url = chrome.extension.getURL(images[idx]);//get absolute path of images and change the source url to image's url
          console.log(url);
          imgArr[i].src = url;
     }             
}

//response
chrome.runtime.onMessage.addListener(
     function (request, sender, sendResponse) {
          //console.log(request);
          sendResponse("Hello from the other side");
          //console.log(sender);
          changeImages();
     }
);