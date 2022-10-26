var rem = document.getElementsByClassName('btn-danger');
for(var i=0;i<rem.length;i++){
    var button = rem[i];
    button.addEventListener('click', removeItem);
}

var qtyUp = document.getElementsByClassName('cart-quantity-input');
for(var i=0;i<qtyUp.length;i++) {
    var qty = qtyUp[i];
    qty.addEventListener('change', changeItem);
}

var add = document.getElementsByClassName('but');
for(var i=0;i<add.length;i++) {
    var ad = add[i];
    ad.addEventListener('click', addItem);
}

function addItem(event){
    console.log('clicked');
    var addButton = event.target;
    var shop = addButton.parentElement.parentElement;
    
    var title = shop.getElementsByClassName('h1')[0].innerText;
    var rup = shop.getElementsByClassName('pr')[0].innerText;
    var imgsrc = shop.getElementsByClassName('img1')[0].src;
    addToCart(title,rup,imgsrc);
    updateTotal();
}

function addToCart(title,price,imgsrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    }
    var cartRowContents = 
    `<div class="cart-items">
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src=${ imgsrc } width="100" height="100">
            <span class="cart-item-title">${ title }</span>
        </div>
        <span class="cart-price cart-column">${ price }</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>
    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow); 
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeItem);
}

function changeItem(event){
    var qtc = event.target;
    if(isNaN(qtc.value) || qtc.value!=1){
        alert('You can only take one quantity of package at once');
        qtc.value = 1;
    }
    updateTotal();
}

function removeItem(event){
    var rem = event.target;
    rem.parentElement.parentElement.remove();
    updateTotal();
}

function updateTotal(){
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartrows = cartItems.getElementsByClassName('cart-row');
    var total = 0;
    
    for(var i=0;i<cartrows.length;i++){
        var cartRow = cartrows[i];
        var price = cartRow.getElementsByClassName('cart-price')[0];
        var pri = parseInt(price.innerText.replace('Rs.',''));
        total = total+pri;
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs.'+total;
    
}

purchase.addEventListener('click',(e)=> {
    if(document.getElementsByClassName('uname').innerText=='Welcome User'){
        alert('Log In first to Purchase');
    }
    else{
        alert('Purchase Completed!! Thank You!! Do visit again!!');
    }
})