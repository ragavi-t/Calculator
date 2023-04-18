let body = document.getElementsByTagName("body");

let mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main");
document.body.append(mainDiv);

let subDiv = document.createElement("div");
subDiv.setAttribute("class", "sub");
mainDiv.append(subDiv);

let display = document.createElement("p");
display.setAttribute("class", "inputDisplay");
subDiv.append(display);

let displayOut = document.createElement("p");
displayOut.setAttribute("class", "outputDisplay");
subDiv.append(displayOut);


let buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("class", "buttonsContainer");
subDiv.append(buttonsDiv);

let alignButtons = document.createElement("div");
alignButtons.setAttribute("class", "align");
buttonsDiv.append(alignButtons);

let keyMPlus = document.createElement("button");
keyMPlus.setAttribute("class", "Mplus");
keyMPlus.setAttribute("for", "M+");
keyMPlus.innerText = "M+";
alignButtons.append(keyMPlus);

let keyMMinus = document.createElement("button");
keyMMinus.innerText = "M-";
keyMMinus.setAttribute("class", "Mminus");
keyMMinus.setAttribute("for", "M-");
alignButtons.append(keyMMinus);

let keyDelete = document.createElement("button");
keyDelete.innerText = "<=";
keyDelete.setAttribute("onclick", "funcDelete(this)");
keyDelete.setAttribute("class", "delete");
alignButtons.append(keyDelete);

let keyDivide = document.createElement("button");
keyDivide.innerText = "/";
keyDivide.setAttribute("onclick", "funcInput(this)");
keyDivide.setAttribute("class", "divide");
keyDivide.setAttribute("id", "divide");
alignButtons.append(keyDivide);
document.getElementById("divide").disabled = true;

let br1 = document.createElement("br");
alignButtons.append(br1);

let key1 = document.createElement("button");
key1.setAttribute("for", "1");
key1.setAttribute("onclick", "funcInput(this)");
key1.innerText = "1";
alignButtons.append(key1);

let key2 = document.createElement("button");
key2.setAttribute("for", "2");
key2.setAttribute("onclick", "funcInput(this)");
key2.innerText = "2";
alignButtons.append(key2);

let key3 = document.createElement("button");
key3.setAttribute("for", "3");
key3.setAttribute("onclick", "funcInput(this)");
key3.innerText = "3";
alignButtons.append(key3);

let keyPlus = document.createElement("button");
keyPlus.setAttribute("onclick", "funcInput(this)");
keyPlus.setAttribute("id", "plus");
keyPlus.innerText = "+";
alignButtons.append(keyPlus);
document.getElementById("plus").disabled = true;

let br2 = document.createElement("br");
alignButtons.append(br2);

let key4 = document.createElement("button");
key4.setAttribute("for", "4");
key4.setAttribute("onclick", "funcInput(this)");
key4.innerText = "4";
alignButtons.append(key4);

let key5 = document.createElement("button");
key5.setAttribute("for", "5");
key5.setAttribute("onclick", "funcInput(this)");
key5.innerText = "5";
alignButtons.append(key5);

let key6 = document.createElement("button");
key6.setAttribute("for", "6");
key6.setAttribute("onclick", "funcInput(this)");
key6.innerText = "6";
alignButtons.append(key6);

let keyMinus = document.createElement("button");
keyMinus.innerText = "-";
keyMinus.setAttribute("onclick", "funcInput(this)");
keyMinus.setAttribute("id", "minus");
alignButtons.append(keyMinus);
document.getElementById("minus").disabled = true;

let br3 = document.createElement("br");
alignButtons.append(br3);

let key7 = document.createElement("button");
key7.setAttribute("for", "7");
key7.setAttribute("onclick", "funcInput(this)");
key7.innerText = "7";
alignButtons.append(key7);

let key8 = document.createElement("button");
key8.setAttribute("for", "8");
key8.setAttribute("onclick", "funcInput(this)");
key8.innerText = "8";
alignButtons.append(key8);

let key9 = document.createElement("button");
key9.setAttribute("for", "9");
key9.setAttribute("onclick", "funcInput(this)");
key9.innerText = "9";
alignButtons.append(key9);

let keyMul = document.createElement("button");
keyMul.setAttribute("onclick", "funcInput(this)");
keyMul.setAttribute("id", "multiply");
keyMul.innerText = "*";
alignButtons.append(keyMul);
document.getElementById("multiply").disabled = true;

let br4 = document.createElement("br");
alignButtons.append(br4);

let keyMod = document.createElement("button");
keyMod.setAttribute("onclick", "funcInput(this)");
keyMod.setAttribute("id", "mod");
keyMod.innerText = "%";
alignButtons.append(keyMod);
document.getElementById("mod").disabled = true;

let key0 = document.createElement("button");
key0.setAttribute("for", "0");
key0.setAttribute("onclick", "funcInput(this)");
key0.innerText = "0";
alignButtons.append(key0);

let keyDot = document.createElement("button");
keyDot.setAttribute("onclick", "funcInput(this)");
keyDot.setAttribute("id", "dot");
keyDot.innerText = ".";
alignButtons.append(keyDot);
document.getElementById("dot").disabled = false;

let keyEqual = document.createElement("button");
keyEqual.setAttribute("onclick", "funcOut(this)");
keyEqual.setAttribute("id", "equal");
keyEqual.innerText = "=";
alignButtons.append(keyEqual);
document.getElementById("equal").disabled = true;

let displayValue = document.querySelector(".inputDisplay");
let operatorArr = ["+", "-", "/", "*", "%", "."];
let inputValue;
let lastele;
let deleteVal;

function funcInput(e) {
  let calcValue = displayValue.innerHTML;
  displayValue.innerText = calcValue + e.innerText;
  inputValue = calcValue + e.innerText;
  lastele = inputValue.slice(-1);

  if (operatorArr.includes(lastele)) {
    document.getElementById("divide").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("mod").disabled = true;
    document.getElementById("dot").disabled = true;
    document.getElementById("equal").disabled = true;
  } else {
    document.getElementById("divide").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("multiply").disabled = false;
    document.getElementById("mod").disabled = false;
    document.getElementById("dot").disabled = false;
    document.getElementById("equal").disabled = false;
  }
}

function funcDelete() {
  
//  let d=displayValue.innerText;
//  console.log(typeof(d));
// let a = d.split("")
// let b = a.pop();
// console.log( a.join(""));
// c = inputValue;
// console.log(c);
}

function funcOut(){
  let output = eval(displayValue.innerText);
  document.querySelector(".outputDisplay").innerText=output;
}