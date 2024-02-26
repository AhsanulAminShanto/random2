function findTotal(){
    var price1 = parseFloat(document.getElementById("p1Box").value);
    var price2 = parseFloat(document.getElementById("p2Box").value);
    var discount=(price1*price2*20)/100;
    var payable=(price1*price2*80)/100;
    document.getElementById("display1").value
    =discount;

    document.getElementById("display2").value
    =payable;
}