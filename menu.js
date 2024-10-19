let cartCount=0;

document.querySelector(".add-to-cart").addEventListener("click",function(){
    cartCount++;
    document.getElementById("cart-count").innerHTML=cartCount;
})