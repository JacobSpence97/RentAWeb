// to find the total
function total(price, repval) {
    // var tax = (price + repval) * 0.7
    var final = (price + (.1 * repval)) * (1.07);
    return final.toFixed(2);
    console.log(final.toFixed(2));  
}
function ifchecked(){
    var price = 0;
    var repval = 0;
if($("#dr_strange").is(':checked')){
    price += 8.00;
    repval += 25.00;
    
}if($("#avatar").is(':checked')){
    price += 10.00;
    repval += 30.00;
    
}if($("#bee").is(':checked')){
    price += 5.00;
    repval += 20.00;
    
}if($("#cap").is(':checked')){
    price += 8.00;
    repval += 25.00;
    
} if($("#bat").is(':checked')){
    price += 10.00;
    repval += 30.00;
    
} if($("#wade").is(':checked')){
    price += 5.00;
    repval += 20.00;
    
} if($("#hellboy").is(':checked')){
    price += 10.00;
    repval += 30.00;
    
} if($("#billbo").is(':checked')){
    price += 10.00;
    repval += 30.00;
    
} if($("#hulk").is(':checked')){
    price += 2.00;
    repval += 5.00;
    
} if($("#tony").is(':checked')){
    price += 5.00;
    repval += 20.00;
    
} if($("#it").is(':checked')){
    price += 2.00;
    repval += 5.00;
    
} if($("#joke").is(':checked')){
    price += 10.00;
    repval += 30.00;
    
} if($("#gandalf").is(':checked')){
    price += 2.00;
    repval += 5.00;
    
} if($("#pi").is(':checked')){
    price += 2.00;
    repval += 5.00;
    
} if($("#spidy").is(':checked')){
    price += 10.00;
    repval += 30.00;
    
} if($("#x2").is(':checked')){
    price += 5.00;
    repval += 20.00;
}
return  [price, repval];
}
$( document ).ready(function(){
    $("#submit").click(function(){
        var check = ifchecked();
        var price = check[0];
        var repval = check[1];
        window.alert("Your total is:" + " " + total(price,repval));
    })
});