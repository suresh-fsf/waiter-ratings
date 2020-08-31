document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  // var instances = M.Dropdown.init(elems, options);
});

// Or with jQuery


$(document).ready(function () {
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
});


// function calculateTip() {
//   const billAmt = document.getElementById("billamt").value;
//   const serviceQual = document.getElementById("serviceQual").value;

//   //validate input
//   if (billAmt === "" || serviceQual == 0) {
//     alert("Please enter values");
//     return;
//   }
//   //Check to see if this input is empty or less than or equal to 1
//   if (numOfPeople === "" || numOfPeople <= 1) {
//     numOfPeople = 1;
//     document.getElementById("each").style.display = "none";
//   } else {
//     document.getElementById("each").style.display = "block";
//   }

//   //Calculate tip
//   let total = (billAmt * serviceQual);
//   //round to two decimal places
//   total = Math.round(total * 100);
//   //next line allows us to always have two digits after decimal point
//   total = total.toFixed(2);
//   //Display the tip
//   document.getElementById("totalTip").style.display = "block";
//   document.getElementById("tip").innerHTML = total;
// }
//Math calculations for tips
var saveEl2 = document.querySelector("#save");

function calculateTip(billamt, serviceQualEl) {
  var roundedResult = (parseFloat(billamt) * parseFloat(serviceQualEl)).toFixed(2);
  return roundedResult;
}

function calculatebillamtEl1(billamtEl1, tipAmount) {
  return parseFloat(billamtEl1) + parseFloat(tipAmount);
}

function addTip() {
  var serviceQualEl = document.querySelector("#serviceQual").value;
  var billamtEl1 = document.querySelector("#billamt").value;
  var name = document.querySelector("#waiterName").value;

  // event.preventDefault();
  // var tipPercentage = tipEl.value * .01;
  // var total = totalEl.value;
  var tipAmount = calculateTip(billamtEl1, serviceQualEl);
  var newTotal = calculatebillamtEl1(billamtEl1, tipAmount);
  console.log(tipAmount, newTotal);
  // document.querySelector("#tip-amount").textContent = tipAmount;
  // document.querySelector("#new-total").textContent = newTotal.toFixed(2);
  var rating = ""
  if (serviceQualEl === "0.3") {
    rating = "great"
  }
  else if (serviceQualEl === "0.2") {
    rating = "good"
  }
  else {
    rating = "bad"
  }
  redirect(name, rating, tipAmount)
}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
// document.getElementById("calculate").onclick = function () {
//   calculateTip();
// };

//sends tip amount with total to new page
function redirect(name, rating, tipAmount) {
  $.post("/api/serviceQual", { name, rating, tipAmount }).then(function () { window.location.replace("/previoustips") });
}

//Tips array 
let tips = [];

// Save Tip Button
const saveTip = (ev) => {
  ev.preventDefault();
  let tip = {
    id: Date.now(),
    tipAmount: document.getElementById("tip").value,
  };
  tips.push(tip);
  //Reset
  document.forms[0].reset();

  console.log("TIP HAS BEEN SAVED!");
};
document.getElementById("save").addEventListener("click", saveTip);


