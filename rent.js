// to find the total
function total(price, repval) {
    // var tax = (price + repval) * 0.7
    var final = (price + (.1 * repval)) * (1.07);
    return final.toFixed(2);
    console.log(final.toFixed(2));  
}
function ifchecked(){
if($("#dr_strange").is(':checked')){
    var price = 8.00;
    var repval = 25.00;
    return  [price, repval];
}else if($("#avatar").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
    return  [price, repval];
}else if($("#bee").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
    return  [price, repval];
}else if($("#cap").is(':checked')){
    var price = 8.00;
    var repval = 25.00;
    return  [price, repval];
}else if($("#bat").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
    return  [price, repval];
}else if($("#wade").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
    return  [price, repval];
}else if($("#hellboy").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
    return  [price, repval];
}else if($("#billbo").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
    return  [price, repval];
}else if($("#hulk").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
    return  [price, repval];
}else if($("#tony").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
    return  [price, repval];
}else if($("#it").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
    return  [price, repval];
}else if($("#joke").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
    return  [price, repval];
}else if($("#gandalf").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
    return  [price, repval];
}else if($("#pi").is(':checked')){
    var price = 2.00;
    var repval = 5.00;
    return  [price, repval];
}else if($("#spidy").is(':checked')){
    var price = 10.00;
    var repval = 30.00;
    return  [price, repval];
}else if($("#x2").is(':checked')){
    var price = 5.00;
    var repval = 20.00;
    return  [price, repval];
}
}
$( document ).ready(function(){
    $("#submit").click(function(){
        var check = ifchecked();
        var price = check[0];
        var repval = check[1];
        window.alert("Your total is:" + " " + total(price,repval));
    })
});