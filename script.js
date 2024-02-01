console.dir( document);

//1
let Box = document.querySelector("#box");
let box2 = `<div class="wrapper"> 
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg">
<h2 class="title">image title</h2>
</div>`;
Box.insertAdjacentHTML("afterbegin", box2);

let title = Box.querySelector(".title");
title.style.color = "red";
title.style.fontSize = "30px";

let img = Box.querySelector(".wrapper > img")
img.style.width = "700px"



//2
let div_p = document.querySelectorAll(".div_p");
let div_p_box = `<p class="text"> hello world </p>`
div_p.forEach((box3)=>{
box3.insertAdjacentHTML("afterbegin",div_p_box)
})







//3
let GoogleLink = document.createElement('a')
let div_a = document.querySelector(".div_a")
GoogleLink.textContent = 'google link';
GoogleLink.setAttribute("href","https://www.google.co.uk/") 
GoogleLink.setAttribute("target" ,"_blank") 
GoogleLink.classList.add("link") 
GoogleLink.classList.replace("link", "newclass")
div_a.insertAdjacentElement('afterbegin',GoogleLink)



