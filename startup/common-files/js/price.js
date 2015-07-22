// Define veriables for use
var quantity=$("#quantity"),
	price=$("#price"),
	button=$("#buton_ckout");

//when quantity change change price = (quantity * 300) 
//then use the url value to checkout

quantity.change(function() {
	price.html("$ "+(quantity.val()*300)+" MXN");
	button.attr("href","https://animalvitaemx.myshopify.com/cart/3489806725:"+quantity.val());
});