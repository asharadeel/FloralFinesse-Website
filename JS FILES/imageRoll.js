//declarations
let sources = new Array('IMGFILES/imageTemplate.jpg','IMGFILES/itemTemplate.jpg','IMGFILES/imageTemplate.jpg');
let pos = 0;

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let image = document.getElementById("images");


console.log(next);
console.log(previous);
console.log(image);
//listeners
next.addEventListener('click',nextImage);
previous.addEventListener('click',previousImage);

function nextImage(){
    pos++;
    imageHandle();
    console.log(pos);

}

function previousImage(){
    pos--;
    imageHandle();
    console.log(pos);
}

//main method
function imageHandle(){
    let cap = Math.abs(pos%sources.length);    
    image.src=sources[cap];
    console.log("Changes made, image " + cap + " has been set. " + image.src + " | " + sources[cap]);
}