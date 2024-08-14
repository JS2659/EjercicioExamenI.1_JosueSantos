function calcular(){
    let P1 = parseFloat(document.getElementById("P1").value);
    let P2 = parseFloat(document.getElementById("P2").value);
    let P3 = parseFloat(document.getElementById("P3").value);
    let P4 = parseFloat(document.getElementById("P4").value);
    let P5 = parseFloat(document.getElementById("P5").value);

    let subtotalTxt = document.getElementById("SubTotal");
    let descuentoTxt = document.getElementById("Descuento");
    let totalTxt = document.getElementById("Total");
    let descuento = 0;
    let total = 0;
    console.log(typeof(P1))
    if( P1 >= 0 && P2 >= 0 && P3 >= 0 && P4 >= 0 && P5 >= 0){
        let subtotal = P1+P2+P3+P4+P5
        console.log(subtotal)
        subtotalTxt.textContent = "SubTotal: Lps." + subtotal;
        if (subtotal < 1000){
            descuentoTxt.textContent = "Descuento: Lps."+descuento;
            total = subtotal;
        }
        if(subtotal >= 1000 && subtotal < 5000){
            descuento = Math.round(subtotal*0.1)  
            descuentoTxt.textContent = "Descuento: Lps."+descuento;      
        }
        if(subtotal >= 5000 && subtotal < 9000){
            descuento = Math.round(subtotal*0.2) 
            descuentoTxt.textContent = "Descuento: Lps."+descuento;      
        }
        if(subtotal >= 9000 && subtotal < 13000){
            descuento = Math.round(subtotal*0.3) 
            descuentoTxt.textContent = "Descuento: Lps."+descuento;      
        }
        if(subtotal >= 13000){
            descuento = Math.round(subtotal*0.4) 
            descuentoTxt.textContent = "Descuento: Lps."+descuento;      
        }

        total = subtotal - descuento;
        totalTxt.textContent = "Total: Lps."+total;
    
    }else{
        Swal.fire({
            icon: "error",
            title: "Precio no valido",
            text: "Todos los precios deben ser numeros mayores a 0",
          });
    }
}

function limpiar(){
    let P1 = document.getElementById("P1");
    let P2 = document.getElementById("P2");
    let P3 = document.getElementById("P3");
    let P5 = document.getElementById("P5");
    let P4 = document.getElementById("P4");
    P1.value = 0
    P2.value = 0
    P3.value = 0
    P4.value = 0
    P5.value = 0

    let subtotalTxt = document.getElementById("SubTotal");
    let descuentoTxt = document.getElementById("Descuento");
    let totalTxt = document.getElementById("Total");
    subtotalTxt.textContent = "SubTotal: Lps.0.00";
    descuentoTxt.textContent = "Descuento: Lps.0.00"
    totalTxt.textContent = "Total: Lps.0.00"
}