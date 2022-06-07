// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElem = product.querySelector('.subtotal span');
  let subtotal = price * quantity;
  subtotalElem.innerText = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  //... your code goes here
  
  
  // ITERATION 3
  //... your code goes here
  const totalCounter = document.querySelector('#total-value span');
  const products = document.querySelectorAll('.product');
  let total = Array.from(products).map(prod=>updateSubtotal(prod)).reduce((acc,value)=>acc+value)
  totalCounter.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  const product = target.parentNode.parentNode
  const subtotalElem = product.querySelector(".subtotal span")
  console.log('The target in remove is:', target);
  console.log('The parent:', subtotalElem );
  const totalCounter = document.querySelector('#total-value span');
  const newTotal = Number(totalCounter.innerText) - Number(subtotalElem.innerText)

  console.log(newTotal)
  console.log(Number(subtotalElem.innerText))
  product.remove()
  totalCounter.innerText = Number(newTotal)
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  const product = target.parentNode.parentNode
  const name = product.querySelector("td input[type='text']")
  const price = product.querySelector("td input[type='number']")

  const row = document.createElement("tr")
  row.className = "product"
  row.innerHTML=`<td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  const table = document.querySelector("#cart tbody")
  table.appendChild(row)

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button=>button.addEventListener('click', removeProduct));

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button=>button.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
