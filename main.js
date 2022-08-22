const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

const menuburger = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');

const menuCarrito = document.querySelector('.navbar-shopping-card');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');

const cardContainer = document.querySelector('.card-container');

const productDetail =document.querySelector('#productDetail');
const productDetailClose =document.querySelector('.product-detail-close');

//* EVENTS listen the clicks
menuEmail.addEventListener('click', toggleDesktopmenu);
menuburger.addEventListener('click',toggleMobilemenu);
menuCarrito.addEventListener('click',toggleCarritomenu);
productDetailClose.addEventListener('click',closeProduct);

function toggleDesktopmenu(){
    const isAsideClosed= shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');
    } 

    const isdetailProductClosed= productDetail.classList.contains('inactive');

    if (!isdetailProductClosed) {
        productDetail.classList.add('inactive');
    } 
    
    desktopmenu.classList.toggle('inactive');
}

function toggleMobilemenu(){
    const isAsideClosed= shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');
    } 

    const isdetailProductClosed= productDetail.classList.contains('inactive');

    if (!isdetailProductClosed) {
        productDetail.classList.add('inactive');
    } 

    mobilemenu.classList.toggle('inactive');
}

function toggleCarritomenu(){
    const isMobileMenuClosed= mobilemenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {//* if menuMobile is open, close it 
        mobilemenu.classList.add('inactive');
    } 
      
    const isdesktopmenuClosed= shoppingCardContainer.classList.contains('inactive');

    if (!isdesktopmenuClosed) {
        desktopmenu.classList.add('inactive');
    } 

    const isdetailProductClosed= productDetail.classList.contains('inactive');

    if (!isdetailProductClosed) {
        productDetail.classList.add('inactive');
    } 

    shoppingCardContainer.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bike Matias',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle Martin',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses Sport',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
function openProduct() {
    const isAsideClosed= shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');
    } 

    const isMobileMenuClosed= mobilemenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {//* if menuMobile is open, close it 
        mobilemenu.classList.add('inactive');
    } 
    
    const isdesktopmenuClosed= desktopmenu.classList.contains('inactive');

    if (!isdesktopmenuClosed) {
        desktopmenu.classList.add('inactive');
    } 

    productDetail.classList.remove('inactive');//* REMOVE because is for show without care how times click in each img
}
function closeProduct(){
    productDetail.classList.add('inactive');
}
/* <div class="product-card"><!--style a card-->
<img  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>KAT</p>
    </div>

    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
 </div>
</div> 
</div> CODE HTML , NOW INSTED OF JS*/

function renderProducts(array){
for (product of array) {
    //* CREATE THE HTML FOR THE PRODUCTS
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

        const img =document.createElement('img');
        img.setAttribute('src', product.image);//* prodcut{nam, price, image} ->product.image
        img.addEventListener('click', openProduct);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

            const productInfoDiv = document.createElement('div');
                
                const productPrice = document.createElement('p');
                productPrice.innerText='$'+product.price;

                const productName = document.createElement('p');
                productName.innerText=product.name;

            productInfoDiv.append(productPrice, productName);//* meter name and price

            const productFigure = document.createElement('figure');
            
                const ProductImg =document.createElement('img');
                ProductImg.setAttribute('src', './icons/bt_add_to_cart.svg');

            productFigure.appendChild(ProductImg);//* meter producr info en figure

        productInfo.append(productInfoDiv, productFigure);

    productCard.append(img, productInfo);

cardContainer.appendChild(productCard);
}
}
renderProducts(productList);//* for example a array of a API-REST