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
console.log(btnCart);
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