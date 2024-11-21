const buttonsCart = document.querySelector("#buttonsCart");
const purchaseOrder = document.querySelector("#purchaseOrder");
const cardsSection = document.querySelector("#cart #cards");

function insertButtons(){
    const actions = `<div class="text-sm-end mt-2 mt-sm-0">
    <button id="btn-clearCart" class="btn btn-danger" onclick="clearCart()"><span class="material-symbols-outlined">remove_shopping_cart</span>Clear Cart</button>
    <button id="btn-checkout" class="btn btn-success" onclick="checkout()"><span class="material-symbols-outlined">
     approval_delegation
     </span>Checkout</button>
   </div>`

    buttonsCart.innerHTML = actions;
};
insertButtons();

function insertOrder(){
    const order = `<div class="mt-5 mt-lg-0">
               <div class="card border shadow-none">
                <div class="card-header bg-transparent border-bottom py-3 px-4">
                 <h5 class="font-size-16 mb-0">Purchase order</h5>
                </div>
                <div class="card-body p-4 pt-2">
                 <div class="table-responsive">
                  <table class="table mb-0">
                   <tbody>
                    <tr class="bg-light">
                     <th>Total:</th>
                     <td class="text-end">
                      <span class="fw-bold" id="cart-total"> $ 0 </span>
                     </td>
                    </tr>
                   </tbody>
                  </table>
                 </div>
                </div>
               </div>
              </div>`

    purchaseOrder.innerHTML = order;
};
insertOrder();

function getCart(cards){
    const list = cards.map(
        card => `<div class="card border shadow-none mb-2">
                    <div class="card-body">
                        <div class="d-flex align-items-start d-flex-correction">
                            <div class="me-4">
                                <img src='${urlCars}${card.product.id}.jpg' class='img-fluid rounded-start'>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-18">${card.product.model}</h5>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2">Price</p>
                                            <h5 class="mb-0 mt-2">$${card.product.price}</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2">Quantity</p>
                                            <h5 class="mb-0 mt-2">${card.quantity}</h5> 
                                        </div>  
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2">Total</p>
                                            <h5 class="mb-0 mt-2">$${card.product.price * card.quantity}</h5> 
                                        </div>  
                                    </div>
                                    <div class="col-md-2">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Delete</p>
                                        </div>  
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>`);
        cardsSection.innerHTML = list.join("");

        if (localStorage.getItem("quantity") >= 1){
            const footerAll = document.querySelector(".footerAll");
            footerAll.style.position = "relative";
            footerAll.style.bottom = "0";
        } else {
            buttonsCart.style.display = "none";
            purchaseOrder.style.display = "none";
            const div = document.querySelector("#containerCart");
            div.innerHTML = `<p class='cartEmpty'>Your cart is empty.</p><a href="../pages/index.html" style="color: #868686; text-align: center;"><button class="btn buttonLink">Continue shopping</button></a>`;
            const footerAll = document.querySelector(".footerAll");
            footerAll.style.position = "fixed";
            footerAll.style.bottom = "0";
        }
};

getCart(JSON.parse(localStorage.getItem("cart")));

function total(cards){
    let cartTotal = document.querySelector("#cart-total");

    let total =
        cards.length > 0
            ? cards.reduce(
                (acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0
            )
        : 0;
    cartTotal.innerText = "$" + total;
}

total(JSON.parse(localStorage.getItem("cart")));

function removeItem(id){
    const cards = JSON.parse(localStorage.getItem("cart"));

    const newCards = cards.filter(card => card.product.id !== id);
    
    localStorage.setItem("cart", JSON.stringify(newCards));

    getCart(newCards);

    total(newCards);

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);
    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = totalQuantity;
}

function clearCart(){
    const quantityTag = document.querySelector("#quantity");
    const footerAll = document.querySelector(".footerAll");
    localStorage.setItem("quantity", 0);
    quantityTag.innerText = "0";
    localStorage.setItem("cart", JSON.stringify([]));
    getCart([]);
    total([]);
    footerAll.style.position = "fixed";
    footerAll.style.bottom = "0";
}

function checkout(){
    const recurso = {
        user: localStorage.getItem("email"),
        items: JSON.parse(localStorage.getItem("cart")),
    };

    fetch("https://67367b22aafa2ef22230a09c.mockapi.io/orders/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recurso),
        })
            .then(response => {
                if (response.status !== 201) {
                    console.error("Error:", error);
                    Swal.fire({
                        text: "Oops... There was a problem. Please try again later.",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#333",
                    });
                } else {
                    return response.json()
                }
            })
            .then(order => {
                Swal.fire({
                    text: `Thank you ${order.user} for your purchase. We have registered your order #${order.id}`,
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#333",
                });
                clearCart();
            });
};