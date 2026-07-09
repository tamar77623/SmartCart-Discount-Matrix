let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let select = document.getElementById("select");
let btn = document.getElementById("btn");
let h4 = document.getElementById("h4");
let span1 = document.getElementById("span1")
let option1 = document.getElementById("option1")
btn.onclick = function(){
    if(inp1.value === ""){
        h4.innerText = "Please Enter the current invoice price";
        return;
    }
    if(inp2.value === ""){
        h4.innerText = "Please Enter the discount code";
        return;
    }
    if(inp3.value === ""){
        h4.innerText = "Enter the shipping cost";
        return;
    }
    if(select.value === "hidden"){
        h4.innerText = "Please Choose your customer type";
        return;
    }
    acount();
}
function h4innertext(){
    setTimeout(() => {
        h4.innerText = "";
    }, 1900);
}
inp1.oninput = function(){
    if(inp1.value >= 100){
        h4.innerText = "The shipping cost has become zero because the invoice is over 100";
        inp3.value = 0;
        h4innertext();
        return;
    }
    if(inp1.value === ""){
        inp3.value = "";
        h4innertext();
        return;
    }
    if(inp1.value < 100){
        inp3.value = "";
        h4innertext();
        return;
    }
}
function acount(){
    let resultinp1 = Number(inp1.value);
    let shippingCost = Number(inp3.value); 
    let discountPercent = 0;
    if (select.value === "VIP") {
        discountPercent = 20;
    } else {
        discountPercent = 10;
    }
    if (inp2.value !== "") {
        discountPercent = discountPercent + 5; 
    }
    let finalPrice = resultinp1 - (resultinp1 * (discountPercent / 100)) + shippingCost;
    span1.innerText = "Final Price after total " + discountPercent + "% discount: $" + finalPrice;
    span1.style.display = "block";
}
select.onclick = function(){
    option1.style.display = 'none'
}