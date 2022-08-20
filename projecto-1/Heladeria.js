
dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla); // "3" = 3
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1){
     alert("Cofla, comprate el helado de agua")
     alert("y te sobra" + (dineroCofla - 0.6))  
}
else if (dineroCofla >= 1 && dineroCofla < 1.6 ){
     alert("Cofla, comprate el helado de crema") 
     alert("y te sobra" + (dineroCofla - 1))   
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7 ){
     alert("Cofla, comprate el helado de piña")
     alert("y te sobra" + (dineroCofla - 1.6))    
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8 ){
     alert("Cofla, comprate el helado de fresa")
     alert("y te sobra" + (dineroCofla - 1.7))    
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9 ){
     alert("Cofla, comprate el helado de fresa con yogurt")
     alert("y te sobra" + (dineroCofla - 1.8))    
}
else if (dineroCofla>= 2.9){
     alert("Cofla, comprate el helado con confites o un helado de 3 marias ")
     alert("y te sobra" + (dineroCofla - 2.9))
}
else{
	alert("lo siento Cofla, no te alcanza para ningún helado")
};



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
     alert("Roberto, comprate el helado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6 ){
     alert("Roberto, comprate el helado de crema")    
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 ){
     alert("Roberto, comprate el helado de piña")    
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8 ){
     alert("Roberto, comprate el helado de fresa")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9 ){
     alert("Roberto, comprate el helado de fresa con yogurt")    
}
else if (dineroRoberto>= 2.9){
     alert("Roberto, comprate el helado con confites o un helado de 3 marias ")

}
else{
	alert("lo siento Roberto, no te alcanza para ningún helado")
};



if (dineroPedro >= 0.6 && dineroPedro < 1) {
     alert("Pedro, comprate el helado de agua")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6 ){
     alert("Pedro, comprate el helado de crema")    
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ){
     alert("Pedro, comprate el helado de piña")    
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8 ){
     alert("Pedro, comprate el helado de fresa")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9 ){
     alert("Pedro, comprate el helado de fresa con yogurt")    
}
else if (dineroPedro>= 2.9){
     alert("Pedro, comprate el helado con confites o un helado de 3 marias ")
}
else{
	alert("lo siento Pedro, no te alcanza para ningun helado")
};


