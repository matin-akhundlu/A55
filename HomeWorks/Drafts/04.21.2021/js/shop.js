/* "use strict";

//shoping cart Api

let shopingCart = (function () {
    let cart = []
    class item {
        constructor(name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        }
    }

    function saveCart() {
        localStorage.setItem("shopingCart", JSON.stringify(cart))
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shopingCart"));
    }

    if (localStorage.getItem("shopingCart") != null) {
        loadCart();
    }
    // public methods and propeties

    let obj = {};

    // add to cart

    obj.addItemToCart = function (name, price, count) {
        for(let item in cart){
            if (cart[item].name === name){
                cart[item].count++;
                saveCart();
                return;
            }
        }
        let item = new Item(name, price, count);
        cart.push(item);
        saveCart()
    };

    // remove method

    obj.removeItemFromCart = function(name){
        for(let item in cart){
            if(cart[item].name === name){
                cart[item].count--;
                if(cart[item].count === 0){
                    cart.splice(item, 1)
                }
                break
            }
            saveCart();
        }
    }

    obj.removeItemFromCart = function(name){
        for(let item in cart){
            if(cart[item].name === name){
                  cart.splice(item, 1)
                  break
            }
            }
            saveCart();
        }
    
        // clear cart
        obj.clearCart = function(){
            cart = [];
            saveCart();
        };

        // count cart  or total count
        obj.totalCount - function(){
            let totalCount = 0;
            for(let item in cart){
                totalCount +=cart[item].count;
            }
            return totalCount;
        }

        obj.totalCart - function(){
            let totalCart = 0;
            for(let item in cart){
                totolCart +=cart[item].price * cart[item].count;
            }
            return Number(totolCart.toFixed(2))
        }

        return obj;
    
});

// triger /events

let addBtns = document.querySelectorAll(".add-to-cart");

addBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let name = this.getAttribute("data-name");
        let price = Number(this.getAttribute("data-price"));
        shopingCart.addItemToCart(name, price, 1);
        
    })
});



 */

"use strict";

//shopping cart Api

let shoppingCart = (function () {
  let cart = [];

  class Item {
    constructor(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
  }
  // function Item(name, price, count) {
  //     this.name = name;
  //     this.price = price;
  //     this.count = count;
  // }

  // save cart iin local storage
  function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }
  // load cart
  function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
  }
  if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  // Public methods and propeties
  let obj = {};
  // add to cart
  obj.addItemToCart = function (name, price, count) {
    for (let item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    let item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };
  //remove method
  obj.removeItemFromCart = function (name) {
    for (let item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
      saveCart();
    }
  };
  // remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (let item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };
  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart or total count
  obj.totalCount = function () {
    let totalCount = 0;
    for (let item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total cart price
  obj.totalCart = function () {
    let totalCart = 0;
    for (let item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // set count from item

  obj.setCountFromItem = function (name, count) {
    for (let item in cart) {
      if (cart[item].name === name) {
        cart[item].count = count;
      }
    }
  };

  //list cart
  obj.listCart = function () {
    let cartCopy = [];
    for (let i in cart) {
      let item = cart[i];
      let itemCopy = {};
      for (let p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };
  return obj;
})();

//trigger /events

//add item
let addBtns = document.querySelectorAll(".add-to-cart");
addBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let name = this.getAttribute("data-name");
    let price = Number(this.getAttribute("data-price"));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
});

function displayCart() {
  let cartArray = shoppingCart.listCart();
  let output = "";
  for (let i in cartArray) {
    output += ``;
  }

  document.querySelector(".show-cart").innerHTML = output;
}

displayCart();
