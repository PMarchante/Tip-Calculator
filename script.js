/* eslint-env browser */

var slider = document.getElementById("tip-amount");
var output = document.getElementById("tip-percent");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//will hide tip amount on load
//document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls the function

document.getElementById("calculate-tip").onclick = function () {calculateTip() };

function calculateTip(){
    
    var billAmount = document.getElementById("bill-amount").value;
    var tipAmount = document.getElementById("tip-amount").value / 100;
    var partySize = document.getElementById("party-size").value;
   
    //validation
    if(billAmount <= 0 || billAmount == null){
       
       window.alert("Please enter a valid value for the total bill");
       document.getElementById("bill-amount").value = "";
        document.getElementById("bill-amount").style.borderColor = "red";
        return; //prevent funtion from continueing
       }
    
    if(partySize <= 0 || partySize == null){
       window.alert("Please enter how many people are sharing the bill");
       document.getElementById("party-size").value = "";
        document.getElementById("party-size").style.borderColor = "red";
        return; //prevent funtion from continueing
       }
    
    //adds each if there is more than 1 person eating
    if(partySize > 1){
       
       document.getElementById("each").style.display = "block";
    
       }
    else{
        document.getElementById("each").style.display = "none";
        
}
     
    //calculates the tip amount
    var totaltip = (billAmount * tipAmount) / partySize;
   
  
    //rounds to 2 decimal places
    totaltip = Math.round(totaltip *100)/100;
    totaltip = totaltip.toFixed(2);
    
    //displays the actual tip
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = totaltip;
}//end calculateTip function