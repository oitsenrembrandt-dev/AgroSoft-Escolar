document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
behavior: 'smooth'
});
}
});
});
document.addEventListener('DOMContentLoaded', () => {
// Lógica para el desplazamiento suave de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
behavior: 'smooth'
});
}
});
});
// Lógica para el Carrito de Compras
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const addCartBtns = document.querySelectorAll('.btn-add-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCart() {
cartItemsContainer.innerHTML = '';
let total = 0;
if (cart.length === 0) {
cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">El carrito está vacío.</p>';
}
cart.forEach(item => {
const productElement = document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item');
const productName = productElement.querySelector('.product-name').textContent;
const productPrice = parseFloat(productElement.querySelector('.product-price').dataset.price);
const productImage = productElement.querySelector('img').src;
const cartItemEl = document.createElement('div');
cartItemEl.classList.add('cart-item');
cartItemEl.innerHTML = `
<img src="${productImage}" alt="${productName}">
<div class="item-details">
<h4>${productName}</h4>
<span>$${(productPrice * item.quantity).toLocaleString('es-CO')}</span>
</div>
<div class="item-quantity">
<input type="number" min="1" value="${item.quantity}" data-id="${item.id}">
<i class="fas fa-trash remove-item" data-id="${item.id}"></i>
</div>
`;
cartItemsContainer.appendChild(cartItemEl);
total += productPrice * item.quantity;
});
cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
cartTotalPrice.textContent = `$${total.toLocaleString('es-CO')}`;
localStorage.setItem('cart', JSON.stringify(cart));
}
addCartBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
const id = e.target.dataset.id;
const existingItem = cart.find(item => item.id === id);
if (existingItem) {
existingItem.quantity++;
} else {
cart.push({ id: id, quantity: 1 });
}
updateCart();
cartOverlay.classList.add('visible'); // Muestra el carrito al añadir un producto
});
});
cartItemsContainer.addEventListener('input', (e) => {
if (e.target.matches('.item-quantity input')) {
const id = e.target.dataset.id;
const quantity = parseInt(e.target.value);
const item = cart.find(i => i.id === id);
if (item) {
item.quantity = quantity;
updateCart();
}
}
});
cartItemsContainer.addEventListener('click', (e) => {
if (e.target.matches('.remove-item')) {
const id = e.target.dataset.id;
cart = cart.filter(item => item.id !== id);
updateCart();
}
});
cartToggle.addEventListener('click', () => {
cartOverlay.classList.toggle('visible');
});
closeCartBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
});
// Cierra el carrito si se hace clic fuera de él
window.addEventListener('click', (e) => {
if (e.target === cartOverlay) {
cartOverlay.classList.remove('visible');
}
});
updateCart();
});
document.addEventListener('DOMContentLoaded', () => {
// Lógica para el desplazamiento suave de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
behavior: 'smooth'
});
}
});
});
// Lógica para el Carrito de Compras
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const addCartBtns = document.querySelectorAll('.btn-add-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const openCheckoutBtn = document.getElementById('open-checkout');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCart() {
cartItemsContainer.innerHTML = '';
let total = 0;
if (cart.length === 0) {
cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">El carrito está vacío.</p>';
openCheckoutBtn.disabled = true;
openCheckoutBtn.style.opacity = '0.5';
} else {
openCheckoutBtn.disabled = false;
openCheckoutBtn.style.opacity = '1';
}
cart.forEach(item => {
const productElement = document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item');
const productName = productElement.querySelector('.product-name').textContent;
const productPrice = parseFloat(productElement.querySelector('.product-price').dataset.price);
const productImage = productElement.querySelector('img').src;
const cartItemEl = document.createElement('div');
cartItemEl.classList.add('cart-item');
cartItemEl.innerHTML = `
<img src="${productImage}" alt="${productName}">
<div class="item-details">
<h4>${productName}</h4>
<span>$${(productPrice * item.quantity).toLocaleString('es-CO')}</span>
</div>
<div class="item-quantity">
<input type="number" min="1" value="${item.quantity}" data-id="${item.id}">
<i class="fas fa-trash remove-item" data-id="${item.id}"></i>
</div>
`;
cartItemsContainer.appendChild(cartItemEl);
total += productPrice * item.quantity;
});
cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
cartTotalPrice.textContent = `$${total.toLocaleString('es-CO')}`;
localStorage.setItem('cart', JSON.stringify(cart));
}
addCartBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
const id = e.target.dataset.id;
const existingItem = cart.find(item => item.id === id);
if (existingItem) {
existingItem.quantity++;
} else {
cart.push({ id: id, quantity: 1 });
}
updateCart();
cartOverlay.classList.add('visible');
});
});
cartItemsContainer.addEventListener('input', (e) => {
if (e.target.matches('.item-quantity input')) {
const id = e.target.dataset.id;
const quantity = parseInt(e.target.value);
const item = cart.find(i => i.id === id);
if (item) {
if (quantity > 0) {
item.quantity = quantity;
} else {
cart = cart.filter(i => i.id !== id);
}
updateCart();
}
}
});
cartItemsContainer.addEventListener('click', (e) => {
if (e.target.matches('.remove-item')) {
const id = e.target.dataset.id;
cart = cart.filter(item => item.id !== id);
updateCart();
}
});
cartToggle.addEventListener('click', () => {
cartOverlay.classList.toggle('visible');
});
closeCartBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
});
// Lógica para el formulario de pedido
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
openCheckoutBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
checkoutOverlay.classList.add('visible');
});
closeCheckoutBtn.addEventListener('click', () => {
checkoutOverlay.classList.remove('visible');
});
window.addEventListener('click', (e) => {
if (e.target === cartOverlay) {
cartOverlay.classList.remove('visible');
}
if (e.target === checkoutOverlay) {
checkoutOverlay.classList.remove('visible');
}
});
checkoutForm.addEventListener('submit', (e) => {
e.preventDefault();
const formData = new FormData(checkoutForm);
const orderData = {};
formData.forEach((value, key) => {
orderData[key] = value;
});
const orderDetails = {
customer: orderData,
products: cart,
total: cart.reduce((sum, item) => {
const productPrice = parseFloat(document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item').querySelector('.product-price').dataset.price);
return sum + productPrice * item.quantity;
}, 0)
};
console.log('Pedido confirmado:', orderDetails);
alert('¡Tu pedido ha sido confirmado! Nos pondremos en contacto contigo pronto.');
// Limpiar el carrito y el formulario después de la confirmación
cart = [];
updateCart();
checkoutForm.reset();
checkoutOverlay.classList.remove('visible');
});
updateCart();
});
document.addEventListener('DOMContentLoaded', () => {
// Lógica para el desplazamiento suave de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
behavior: 'smooth'
});
}
});
});
// Lógica para el Carrito de Compras
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const addCartBtns = document.querySelectorAll('.btn-add-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const openCheckoutBtn = document.getElementById('open-checkout');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCart() {
cartItemsContainer.innerHTML = '';
let total = 0;
if (cart.length === 0) {
cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">El carrito está vacío.</p>';
openCheckoutBtn.disabled = true;
openCheckoutBtn.style.opacity = '0.5';
} else {
openCheckoutBtn.disabled = false;
openCheckoutBtn.style.opacity = '1';
}
cart.forEach(item => {
const productElement = document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item');
const productName = productElement.querySelector('.product-name').textContent;
const productPrice = parseFloat(productElement.querySelector('.product-price').dataset.price);
const productImage = productElement.querySelector('img').src;
const cartItemEl = document.createElement('div');
cartItemEl.classList.add('cart-item');
cartItemEl.innerHTML = `
<img src="${productImage}" alt="${productName}">
<div class="item-details">
<h4>${productName}</h4>
<span>$${(productPrice * item.quantity).toLocaleString('es-CO')}</span>
</div>
<div class="item-quantity">
<input type="number" min="1" value="${item.quantity}" data-id="${item.id}">
<i class="fas fa-trash remove-item" data-id="${item.id}"></i>
</div>
`;
cartItemsContainer.appendChild(cartItemEl);
total += productPrice * item.quantity;
});
cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
cartTotalPrice.textContent = `$${total.toLocaleString('es-CO')}`;
localStorage.setItem('cart', JSON.stringify(cart));
}
addCartBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
const id = e.target.dataset.id;
const existingItem = cart.find(item => item.id === id);
if (existingItem) {
existingItem.quantity++;
} else {
cart.push({ id: id, quantity: 1 });
}
updateCart();
cartOverlay.classList.add('visible');
});
});
cartItemsContainer.addEventListener('input', (e) => {
if (e.target.matches('.item-quantity input')) {
const id = e.target.dataset.id;
const quantity = parseInt(e.target.value);
const item = cart.find(i => i.id === id);
if (item) {
if (quantity > 0) {
item.quantity = quantity;
} else {
cart = cart.filter(i => i.id !== id);
}
updateCart();
}
}
});
cartItemsContainer.addEventListener('click', (e) => {
if (e.target.matches('.remove-item')) {
const id = e.target.dataset.id;
cart = cart.filter(item => item.id !== id);
updateCart();
}
});
cartToggle.addEventListener('click', () => {
cartOverlay.classList.toggle('visible');
});
closeCartBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
});
// Lógica para el formulario de pedido
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
openCheckoutBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
checkoutOverlay.classList.add('visible');
});
closeCheckoutBtn.addEventListener('click', () => {
checkoutOverlay.classList.remove('visible');
});
window.addEventListener('click', (e) => {
if (e.target === cartOverlay) {
cartOverlay.classList.remove('visible');
}
if (e.target === checkoutOverlay) {
checkoutOverlay.classList.remove('visible');
}
});
checkoutForm.addEventListener('submit', (e) => {
e.preventDefault();
const formData = new FormData(checkoutForm);
const orderData = {};
formData.forEach((value, key) => {
orderData[key] = value;
});
const orderDetails = {
customer: orderData,
products: cart,
total: cart.reduce((sum, item) => {
const productPrice = parseFloat(document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item').querySelector('.product-price').dataset.price);
return sum + productPrice * item.quantity;
}, 0)
};
console.log('Pedido confirmado:', orderDetails);
alert('¡Tu pedido ha sido confirmado! Nos pondremos en contacto contigo pronto.');
// Limpiar el carrito y el formulario después de la confirmación
cart = [];
updateCart();
checkoutForm.reset();
checkoutOverlay.classList.remove('visible');
});
updateCart();
});
document.addEventListener('DOMContentLoaded', () => {
// Lógica para el desplazamiento suave de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
behavior: 'smooth'
});
}
});
});
// Lógica para el Carrito de Compras
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const addCartBtns = document.querySelectorAll('.btn-add-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const openCheckoutBtn = document.getElementById('open-checkout');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCart() {
cartItemsContainer.innerHTML = '';
let total = 0;
if (cart.length === 0) {
cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">El carrito está vacío.</p>';
openCheckoutBtn.disabled = true;
openCheckoutBtn.style.opacity = '0.5';
} else {
openCheckoutBtn.disabled = false;
openCheckoutBtn.style.opacity = '1';
}
cart.forEach(item => {
const productElement = document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item');
const productName = productElement.querySelector('.product-name').textContent;
const productPrice = parseFloat(productElement.querySelector('.product-price').dataset.price);
const productImage = productElement.querySelector('img').src;
const cartItemEl = document.createElement('div');
cartItemEl.classList.add('cart-item');
cartItemEl.innerHTML = `
<img src="${productImage}" alt="${productName}">
<div class="item-details">
<h4>${productName}</h4>
<span>$${(productPrice * item.quantity).toLocaleString('es-CO')}</span>
</div>
<div class="item-quantity">
<input type="number" min="1" value="${item.quantity}" data-id="${item.id}">
<i class="fas fa-trash remove-item" data-id="${item.id}"></i>
</div>
`;
cartItemsContainer.appendChild(cartItemEl);
total += productPrice * item.quantity;
});
cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
cartTotalPrice.textContent = `$${total.toLocaleString('es-CO')}`;
localStorage.setItem('cart', JSON.stringify(cart));
}
addCartBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
const id = e.target.dataset.id;
const existingItem = cart.find(item => item.id === id);
if (existingItem) {
existingItem.quantity++;
} else {
cart.push({ id: id, quantity: 1 });
}
updateCart();
cartOverlay.classList.add('visible');
});
});
cartItemsContainer.addEventListener('input', (e) => {
if (e.target.matches('.item-quantity input')) {
const id = e.target.dataset.id;
const quantity = parseInt(e.target.value);
const item = cart.find(i => i.id === id);
if (item) {
if (quantity > 0) {
item.quantity = quantity;
} else {
cart = cart.filter(i => i.id !== id);
}
updateCart();
}
}
});
cartItemsContainer.addEventListener('click', (e) => {
if (e.target.matches('.remove-item')) {
const id = e.target.dataset.id;
cart = cart.filter(item => item.id !== id);
updateCart();
}
});
cartToggle.addEventListener('click', () => {
cartOverlay.classList.toggle('visible');
});
closeCartBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
});
// Lógica para el formulario de pedido
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
openCheckoutBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
checkoutOverlay.classList.add('visible');
});
closeCheckoutBtn.addEventListener('click', () => {
checkoutOverlay.classList.remove('visible');
});
window.addEventListener('click', (e) => {
if (e.target === cartOverlay) {
cartOverlay.classList.remove('visible');
}
if (e.target === checkoutOverlay) {
checkoutOverlay.classList.remove('visible');
}
});
checkoutForm.addEventListener('submit', (e) => {
e.preventDefault();
const formData = new FormData(checkoutForm);
const orderData = {};
formData.forEach((value, key) => {
orderData[key] = value;
});
const orderDetails = {
customer: orderData,
products: cart,
total: cart.reduce((sum, item) => {
const productPrice = parseFloat(document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item').querySelector('.product-price').dataset.price);
return sum + productPrice * item.quantity;
}, 0)
};
console.log('Pedido confirmado:', orderDetails);
alert('¡Tu pedido ha sido confirmado! Nos pondremos en contacto contigo pronto.');
// Limpiar el carrito y el formulario después de la confirmación
cart = [];
updateCart();
checkoutForm.reset();
checkoutOverlay.classList.remove('visible');
});
updateCart();
});
document.addEventListener('DOMContentLoaded', () => {
// Lógica para el desplazamiento suave de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
behavior: 'smooth'
});
}
});
});
// Lógica para el Carrito de Compras
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const addCartBtns = document.querySelectorAll('.btn-add-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const openCheckoutBtn = document.getElementById('open-checkout');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCart() {
cartItemsContainer.innerHTML = '';
let total = 0;
if (cart.length === 0) {
cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">El carrito está vacío.</p>';
openCheckoutBtn.disabled = true;
openCheckoutBtn.style.opacity = '0.5';
} else {
openCheckoutBtn.disabled = false;
openCheckoutBtn.style.opacity = '1';
}
cart.forEach(item => {
const productElement = document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item');
const productName = productElement.querySelector('.product-name').textContent;
const productPrice = parseFloat(productElement.querySelector('.product-price').dataset.price);
const productImage = productElement.querySelector('img').src;
const cartItemEl = document.createElement('div');
cartItemEl.classList.add('cart-item');
cartItemEl.innerHTML = `
<img src="${productImage}" alt="${productName}">
<div class="item-details">
<h4>${productName}</h4>
<span>$${(productPrice * item.quantity).toLocaleString('es-CO')}</span>
</div>
<div class="item-quantity">
<input type="number" min="1" value="${item.quantity}" data-id="${item.id}">
<i class="fas fa-trash remove-item" data-id="${item.id}"></i>
</div>
`;
cartItemsContainer.appendChild(cartItemEl);
total += productPrice * item.quantity;
});
cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
cartTotalPrice.textContent = `$${total.toLocaleString('es-CO')}`;
localStorage.setItem('cart', JSON.stringify(cart));
}
addCartBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
const id = e.target.dataset.id;
const existingItem = cart.find(item => item.id === id);
if (existingItem) {
existingItem.quantity++;
} else {
cart.push({ id: id, quantity: 1 });
}
updateCart();
cartOverlay.classList.add('visible');
});
});
cartItemsContainer.addEventListener('input', (e) => {
if (e.target.matches('.item-quantity input')) {
const id = e.target.dataset.id;
const quantity = parseInt(e.target.value);
const item = cart.find(i => i.id === id);
if (item) {
if (quantity > 0) {
item.quantity = quantity;
} else {
cart = cart.filter(i => i.id !== id);
}
updateCart();
}
}
});
cartItemsContainer.addEventListener('click', (e) => {
if (e.target.matches('.remove-item')) {
const id = e.target.dataset.id;
cart = cart.filter(item => item.id !== id);
updateCart();
}
});
cartToggle.addEventListener('click', () => {
cartOverlay.classList.toggle('visible');
});
closeCartBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
});
// Lógica para el formulario de pedido y métodos de pago
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const paymentDetailsContainer = document.getElementById('payment-details-container');
const paymentInfo = {
nequi: {
title: 'Pago por Nequi',
details: 'Transferir a: <strong>+57 313 251 3231</strong>'
},
daviplata: {
title: 'Pago por Daviplata',
details: 'Transferir a: <strong>+57 313 251 3231</strong>'
},
transfiya: {
title: 'Pago por Transfiya',
details: 'Transferir a: <strong>+57 313 251 3231</strong>'
}
};
paymentMethods.forEach(radio => {
radio.addEventListener('change', (e) => {
const method = e.target.value;
const info = paymentInfo[method];
if (info) {
paymentDetailsContainer.innerHTML = `
<h4>${info.title}</h4>
<p>${info.details}</p>
`;
}
});
});
openCheckoutBtn.addEventListener('click', () => {
cartOverlay.classList.remove('visible');
checkoutOverlay.classList.add('visible');
});
closeCheckoutBtn.addEventListener('click', () => {
checkoutOverlay.classList.remove('visible');
});
window.addEventListener('click', (e) => {
if (e.target === cartOverlay) {
cartOverlay.classList.remove('visible');
}
if (e.target === checkoutOverlay) {
checkoutOverlay.classList.remove('visible');
}
});
checkoutForm.addEventListener('submit', (e) => {
e.preventDefault();
const formData = new FormData(checkoutForm);
const orderData = {};
formData.forEach((value, key) => {
orderData[key] = value;
});
const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
const orderDetails = {
customer: orderData,
products: cart,
total: cart.reduce((sum, item) => {
const productPrice = parseFloat(document.querySelector(`.product-item [data-id="${item.id}"]`).closest('.product-item').querySelector('.product-price').dataset.price);
return sum + productPrice * item.quantity;
}, 0),
paymentMethod: selectedPaymentMethod
};
console.log('Pedido confirmado:', orderDetails);
// Mensaje de confirmación al usuario
let confirmationMessage = `¡Tu pedido ha sido confirmado!
\nTotal a pagar: $${orderDetails.total.toLocaleString('es-CO')}
\nMétodo de pago: ${selectedPaymentMethod.toUpperCase()}
\nPor favor, completa la transferencia y nos pondremos en contacto contigo pronto.`;
alert(confirmationMessage);
// Limpiar el carrito y el formulario después de la confirmación
cart = [];
updateCart();
checkoutForm.reset();
checkoutOverlay.classList.remove('visible');
});
updateCart();
});