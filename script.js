var slider = document.getElementById("tip-amount");
var output = document.getElementById("tip-percent");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}