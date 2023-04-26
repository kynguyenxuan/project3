$(document).ready(function() {
    $(window).scroll(function () {
        if($(this).scrollTop()) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky')
            
        }
    })
    // slider

})

let index = 0;
const rightBtn = document.querySelector(".btn2-slider")
const leftBtn = document.querySelector(".btn1-slider")
const imgNumber = document.querySelectorAll(".banner-left-slider img")
const textSlider = document.querySelector(".text-slider")
console.log(imgNumber.length);
// rightBtn.addEventListener("click", function () {
//     index = index + 1;
//     if(index > imgNumber.length - 1) {
//         index = 0
//     }
//     document.querySelector(".banner-left-slider").style.right = index * 100 + "%";
    
    
// })
// leftBtn.addEventListener("click", function () {
//     index = index - 1;
//     if(index < 0) {
//         index = imgNumber.length-1
//     }
//     document.querySelector(".banner-left-slider").style.right = index * 100 + "%"
    

// })

const btnSlider = document.querySelectorAll(".btn01")
const sss = document.querySelector(".text-slider")
console.log(sss);
console.log(document.querySelector(".banner-left-slider"));
console.log(btnSlider);
btnSlider.forEach(function(item, index) {
    item.addEventListener("click", function () {
        document.querySelector(".banner-left-slider").style.right = index * 100 + "%"
        item.classList.add(".btn02")
    })
})
const btnSlider01 = document.querySelectorAll(".text-slider-deatais")
      btnSlider.forEach(function(item, index) {
        item.addEventListener("click", function () {
            document.querySelector(".text-slider").style.right = index * 100 + "%"

        })
      })

// btnSlider.forEach(function(item, index) {
//     // console.log(item);
//     item.addEventListener("click", function () {
//         removeActive ()
//         document.querySelector(".banner-left-slider").style.right = index * 100 + "%"
//         item.classList.add("bnt02")
//     })
// })

// const removeActive = () => {
//     let btnActive = document.querySelector(".btn02")
//     btnActive.classList.remove("btn02")
// }

// / slider 2 setimeout

let setThoiGianSlider = () => {
    // removeActive();
    index = index + 1;
    if(index > imgNumber.length-1) {
        index = 0
    }
    // console.log(index);
    document.querySelector(".banner-left-slider").style.right = index * 100 + "%";
    document.querySelector(".text-slider").style.right = index * 100 + "%"

    btnSlider[index].classList.add("bnt02")
}

setInterval(setThoiGianSlider, 3000)

// slider beer

let i = 0;
const btnImgLeft = document.querySelector(".btn-img-left")
const btnImgRight = document.querySelector(".btn-img-right")
const imgNumber1 = document.querySelectorAll(".div-slider img")
console.log(imgNumber1.length);
btnImgRight.addEventListener("click", function () {
    i = i + 1;
    if(i > imgNumber1.length - 1) {
        i = 0
    }
    document.querySelector(".div-slider").style.right = index * 100 + "%";
    
    
})
btnImgLeft.addEventListener("click", function () {
    i = i - 1;
    if(index < 0) {
        index = imgNumber1.length-1
    }
    document.querySelector(".div-slider").style.right = index * 100 + "%"
})

const btnCart = document.querySelector(".btn-cart")
// console.log(btnCart);
// const cartShow

btnCart.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0"
    // document.querySelector(".cart").style. transition = "ease-in 0.8s"
    // document.querySelector(".container-cart").style.display = "block"
})
const btnCloseCart = document.querySelector(".close-cart")
btnCloseCart.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%"
    // document.querySelector(".container-cart").style.display = "none"

})


// themvaogiohang----------them san pham vao gio hang-----

const btnAddCart = document.querySelectorAll(".btn-icon-add-cart")
// console.log(btnAddCart);
// -----------------lay btn va chon target-----------------
btnAddCart.forEach(function(item, index) {
    // console.log(item);
    item.addEventListener("click", function(event) {
        let btnItem = event
        // console.log(btnItem);
        let addTarget = btnItem.target
        // console.log(addParent);
        let divTotal = addTarget.parentElement.parentElement.parentElement.parentElement
        // console.log(divTotal);
        let img = divTotal.querySelector("img").src
        // console.log(img);
        let nameProduct = divTotal.querySelector("h5").innerText
        // console.log(nameProduct);
        let priceProduct = divTotal.querySelector(".new").innerText
        // console.log(priceProduct);
        
        addCart(img, nameProduct, priceProduct)
        document.querySelector(".cart").style.right = "0"
    })
})

function addCart(img, nameProduct, priceProduct) {
    let addVariable0 = document.createElement("div")
    let VariableItem = document.querySelectorAll(".totalProduct .container-product")
    for(let i = 0; i < VariableItem.length;i++) {
        let productT = document.querySelectorAll(".nameProduct") //lap bien tranh san pham da trung
        console.log(productT);
        if(productT[i].innerText === nameProduct) { //!lặp sản phẩm thứ i bằng cách click sản phẩm. trong cú pháp productT[index].innerText sẽ đưa kết quả đúng nhất
            //!còn innerHTML sẽ cho kết quả in ra thẻ trong trường hợp thẻ in ra nếu thẻ không trùng nhau thì kết quả thẻ sẽ cho kết quả không trùng khớp vì không trùng thẻ kết quả sẽ vẫn chạy
            //!Không đưa ra thông báo
            alert('Sản phẩm đã có trong giỏ hàng') 
            return
        }
    }
    // VariableItem.forEach(function(item,index) {
    // })
    //? trường hợp cảnh báo giỏ hàng nên sử dụng for nếu dùng forEach trường
    //? hợp sẽ xảy ra vẫn cho phép thêm vào giỏ hàng
        addVariable0.innerHTML = `
        <div class="container-product">
        <div class="img-product-cart">
        <a href="">
        <img src="${img}" alt="babyshop-product11b-600x750.webp">
        </a>
        </div>
        <div class="img-product-cart img-product-cart2">
        <h6>
            <a href="" class="nameProduct">
                ${nameProduct}
            </a>
        </h6>

        </div>
        <div class="total-deatails">
        <span>${priceProduct}</span>
        </div>
        <div class="add-input">
        x<input style="width: 30px;outline: none;border: none;" type="number" min="1" value="1">
        </div>
        <div class="remove-add" style="cursor: pointer;">
        <span >Xóa</span>
        </div>
        </div>
        `
    let variable1 = document.querySelector(".totalProduct")
    variable1.append(addVariable0) //append them thuoc tinh vao the chua
    // console.log(variable1);

    cartTotal()
}

// let bienChua = document.querySelector(".totalProduct")
// function scrollW() {
//     bienChua.scroll()
// }

// ------------------total----Tinh gia tien tong----------------------

function cartTotal() {
    let VariableItem = document.querySelectorAll(".totalProduct .container-product")
    let sum = 0;
    // console.log(VariableItem.length);
    VariableItem.forEach(function(item,index) {
        let inputValue = VariableItem[index].querySelector(".add-input input").value
        console.log(inputValue);
        let priceProduct = VariableItem[index].querySelector(".total-deatails span").innerHTML
        // console.log(priceProduct);
        // nhân tổng giá tiền
        let multiplicationTotal = inputValue * priceProduct
        let multiplicationTotal2 = multiplicationTotal
        console.log(multiplicationTotal2); 
        sum = sum + multiplicationTotal
        // sum01 = sum.toLocaleString('de-DE')
        console.log(sum);
    })
    let cartTotalPrice = document.querySelector(".subTotal .totalNew")
    cartTotalPrice.innerHTML = sum
    console.log(cartTotalPrice);
}




