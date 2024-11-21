// function EMIcalculation(){
//     var amount1=parseInt(document.getElementById("amount").value);
//     var interest1=parseInt(document.getElementById("Interest").value);
//     var tenure1=parseInt(document.getElementById("tenure").value);

//     var minterest=(((interest1/12)/100)*amount1)/100;
//     var mprinciple=amount1/tenure1;
//     var emi=mprinciple+minterest;
//     // var emi2=amount1-emi1;
//     // var cast=amount1/12;
//     // var emi=cast+emi2;
   

//     var emiamount=document.getElementById("emiamount");
//     emiamount.innerText="Rs."+emi.toFixed(2);

//     // emi = (amount1 * interest1* Math.pow(1 + interest1, tenure1)) / 
//     //                     (Math.pow(1 + interest1, tenure1) - 1);

//     //         document.getElementById("emiamount").innerText ="₹" + emi.toFixed(2);
// }


function EMIcalculation(){
    var P=parseInt(document.getElementById("amount").value);
    var I=parseInt(document.getElementById("Interest").value);
    var N=parseInt(document.getElementById("tenure").value);

  var R=(I/100)/12;

  var emi1=(P *R *(1+R)^N / [(1+R)^N-1]) ;
  var emi=(P/(N*12))+emi1;

  var emiamount=document.getElementById("emiamount");
    emiamount.innerText="Rs."+emi.toFixed(2);

}