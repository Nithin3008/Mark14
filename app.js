var intialPrice=document.querySelector("#intialPrice")
var quantity=document.querySelector("#quantity")
var sellingPrice=document.querySelector("#currentPrice")
var btn=document.querySelector("#btn")
function profit(ip,sp,q)
{
   var sp1=sp*q;
    var ip1=ip*q;
    var profit1=sp1-ip1;
    var profitPer=(profit1/ip1)*100;
    msg.innerText="Profit you received "+profit1+"/-, profit percentage "+profitPer+"%"
}
function loss(ip,sp,q)
{
    var sp1=sp*q;
    var ip1=ip*q;
    var loss1=ip1-sp1
    var lossPer=(loss1/ip1)*100
    msg.innerText="Loss occured "+loss1+"/-, loss percentage "+lossPer+"%"
    
}

function calculateProfitAndLoss()
{
    var ip=Number(intialPrice.value)//added number here even input type text because below 100 values are not comparing wellit was going into profit function and returning -ve values
    var q=Number(quantity.value);
    var sp=Number(sellingPrice.value)
    
    if(ip>sp)
    {
        loss(ip,sp,q)
        console.log("loss")
    }
    else  if(sp>ip)
    {
        console.log("profit")
        profit(ip,sp,q)
        
    }
}

btn.addEventListener("click",calculateProfitAndLoss)