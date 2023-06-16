const MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}




const myArray = []
const featureContainer = document.querySelector('.Featured-container')
const addToCart = document.querySelectorAll('.priceBtn cart')
console.log(addToCart);

let productHtml = ''

function displayProductInHtml() {

    products.forEach((product) => {
        productHtml += `  
                            <div class="col-4">
                            <div class="to-cart">
                                <a href="product details.html"><img src="${product.img}"></a>
                                
                            </div>
                            <div class="nameRating">
                            <h4>${product.title}</h4>
                            <div class="rating">
                                <i class="${product.rating.fiveStar}"></i>
                                <i class="${product.rating.fiveStar}"></i>
                                <i class="${product.rating.fiveStar}"></i>
                                <i class="${product.rating.fiveStar}"></i>
                                <i class="${product.rating.halfStar}"></i>
    
                            </div>
                            </div>
                            <div class="priceBtn">
                            <p>$${(product.price / 100).toFixed(2)}</p>
                            <button class="cart">Add to cart</button>
                        </div>
                        </div>
                        `

        // console.log(productHtml);
    })
    featureContainer.innerHTML = productHtml
}

displayProductInHtml()




const slides = document.querySelectorAll('.slide')



let counter = 0

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})


function carousel() {

    if (counter === slides.length) {
        counter = 0
    } if (counter < 0) {
        counter = slides.length - 1
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })

    setTimeout(() => {
        counter++;
        carousel();
    }, 3000)
}
carousel()


