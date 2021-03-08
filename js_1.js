var text = document.getElementById("text");
text.title = "New text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New<br>string";

document.getElementById("text").style.color = "black";

var spans = getElementsByTagName("span");

for(var i=0; i<spans.lenght; i++){
    console.log(spans[i].innerHTML);
}