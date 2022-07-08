var images1, soldering, total, customerInfo, lathe;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


images1 = ['https://i.ebayimg.com/images/g/lIAAAOSwLAtf2ZSP/s-l1600.jpg', 'https://i.ebayimg.com/images/g/we4AAOSwAEJf2ZSO/s-l1600.jpg'];
soldering = ['https://i.ebayimg.com/images/g/uTQAAOSwwI5hn909/s-l1600.jpg', 'https://i.ebayimg.com/images/g/DPMAAOSwr9hg-sSa/s-l1600.jpg'];
lathe = ['https://i.ebayimg.com/images/g/GdYAAOSwuHJhgRIe/s-l1600.jpg', 'https://i.ebayimg.com/images/g/~XYAAOSw0GJhgRLH/s-l1600.jpg'];
total = [];
customerInfo = [getNumberOrString(document.getElementById('name_input').value), getNumberOrString(document.getElementById('address_input').value)];


document.getElementById('previous').addEventListener('click', (event) => {
  let element_file = document.getElementById('file');
  element_file.setAttribute("src", images1[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_file2 = document.getElementById('file');
  element_file2.setAttribute("src", images1.slice(-1)[0]);

});

document.getElementById('next1').addEventListener('click', (event) => {
  let element_soldering = document.getElementById('soldering');
  element_soldering.setAttribute("src", soldering.slice(-1)[0]);

});

document.getElementById('previous1').addEventListener('click', (event) => {
  let element_soldering2 = document.getElementById('soldering');
  element_soldering2.setAttribute("src", soldering[0]);

});

document.getElementById('previous2').addEventListener('click', (event) => {
  let element_lathe = document.getElementById('lathe');
  element_lathe.setAttribute("src",);

});

document.getElementById('next2').addEventListener('click', (event) => {
  let element_lathe2 = document.getElementById('lathe');
  element_lathe2.setAttribute("src", lathe.slice(-1)[0]);

});

document.getElementById('add_to_card').addEventListener('click', (event) => {
  total.unshift(7.5);
  let element_shopping_card = document.getElementById('shopping_card');
  let new_li = document.createElement('li');
  new_li.innerText = 'File set / 1 Piece';

  element_shopping_card.appendChild(new_li);
  let element_total_cost = document.getElementById('total_cost');
  element_total_cost.innerText = total.reduce((a,b) => a+b, 0);

});

document.getElementById('add_to_card1').addEventListener('click', (event) => {
  total.unshift(9);
  let element_shopping_card2 = document.getElementById('shopping_card');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Soldering Iron Kit / 1 Piece';

  element_shopping_card2.appendChild(new_li2);
  let element_total_cost2 = document.getElementById('total_cost');
  element_total_cost2.innerText = total.reduce((a,b) => a+b, 0);

});

document.getElementById('add_to_card2').addEventListener('click', (event) => {
  total.unshift(35);
  let element_shopping_card3 = document.getElementById('shopping_card');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Mini Lathe / 1 Piece';

  element_shopping_card3.appendChild(new_li3);
  let element_total_cost3 = document.getElementById('total_cost');
  element_total_cost3.innerText = total.reduce((a,b) => a+b, 0);

});

document.getElementById('address').addEventListener('click', (event) => {
  customerInfo.unshift(getNumberOrString(document.getElementById('address_input').value));

});