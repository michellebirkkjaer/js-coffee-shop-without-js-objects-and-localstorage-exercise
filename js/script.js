"use strict"; // aktiverer js-strikt mode, hvilket hjælper med at finde fejl

function addToCart(product){ // add to chart knap
    //hent nuværende værdi fra inputfeltet med specifikt id og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value); //hver gang der er en input type skal man huske .value 
    // quanity er nu et tal. Vi vil gerne lægge 1 til vores quanity
    
    //øg quantity med 1 - æøg 1 til den eksisternede quantity værdi
    document.getElementById(product).value = quantity + 1;

    //opdaterer totalprisen
    totalPrice();
}

function removeFromCart(product){ //remove from chart knap
        //hent nuværende værdi fra inputfeltet med specifikt id og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value);

    if(quantity > 0){
        //formindsk quantity med 1 - træk 1 fra den eksisterende quantity værdi
        document.getElementById(product).value = quantity - 1;
        //opdaterer totalsummen for den enkelte vare (vare = kaffeprodukt)
        updateTotalPrice(product);
    }
}

function resetCart(product) {
     //nulstiller quantitys værdi til 0
     document.getElementById(product).value = 0;
     //opdaterer totalsummen for den enkelte vare (vare = kaffeprodukt)
     updateTotalPrice(product);
}

//funktion som opdaterer prisen for den enkelte vare (vare = kaffeprodukt)
function updateTotalPrice(product){
    //hent mængden(quantity) og pris-inputfeltet for den specifikke vare ( vare = kaffeprodukt)og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value); //hver gang der er en input type skal man huske .value 
    const price = parseInt(document.getElementById(product + "-price").value); //tager fat i alle de id med -price selvom der står noget forskelligt foran-price

    //beregner totalprisen for denne specifikke vare
    const total = quantity * price;
    document.getElementById(product + "-total").value = total;

    //opdaterer den totalprisen for alle varer
    totalPrice();
}
//funktion til at beregne og opdatere den samlede totalpris for alle varer i kurven
function totalPrice(){
    //variabel til at holde styr på den samlede totalpris
    let totalSum = 0;
    //her tager vi fat i alle inputfelter der indeholder et id hvor "-total" indgår i slutningen af ordet.
    const productElements = document.querySelectorAll("[id$=-total]")

    //looper gennem hvert produkt-element (espresso, americano, coffee) og lægger værdierne sammen
    productElements.forEach(productElem => {
        totalSum+= parseInt(productElem.value);//lægger det gamle tal sammen med det nye
    });

    document.getElementById("totalSum").value = totalSum
}

