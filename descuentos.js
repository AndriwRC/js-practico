function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function runPriceDiscount(){
    const coupons = [
        {
            name: "Promo-day",
            discount: 15,
        },
        {
            name: "Super-promo-master-crack",
            discount: 30,
        },
        {
            name: "Mega-dcto",
            discount: 25,
        },
    ];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento; 
    }

    
}

// console.log({
//     precioOrignial,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });