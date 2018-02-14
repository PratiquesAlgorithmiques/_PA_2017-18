function setup() {}

function mousePressed (){
$(function () {
var parent = $("#main");
var divs = parent.children();
while (divs.length) {
parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}
});
}