function switchImage(e,n){
    let img1 = e.querySelector(`.img-1`);
    let img2 = e.querySelector('.img-2');

    if(n==2){

        img1.style.opacity  = 0;
        setTimeout(()=>{
            img1.style.display = 'none';
            img2.style.display = 'block';
            img2.style.opacity = 1;
        },200)
    }else{
        img2.style.opacity  = 0;
        setTimeout(()=>{
            img2.style.display = 'none';
            img1.style.display = 'block';
            img1.style.opacity = 1;
        },200)

    }
}

function showAllBtns(e){
    let productActions = e.querySelector('.product-actions');

    productActions.style.animation = `0.3s 1 fade-out`;
    productActions.style.animation = `0.3s 1 fade-in`;
    productActions.innerHTML = `<a href="" class="wishlist"><i class="fa-regular fa-heart"></i></a>
    <a href="../cart/cart.html" style="background:#2974f1 !important;color:#fff !important;" class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></i>Add to Cart</a>
    <a href="" class="quick-view"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
}

function hideAllBtns(e){
    let productActions = e.querySelector(".product-actions");
        productActions.style.animation = `0.3s 1 fade-out`;
        productActions.style.animation = `0.3s 1 fade-in`;
        productActions.innerHTML = `
        <a href="../cart/cart.html" class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></i>Add to Cart</a>
        `;
}