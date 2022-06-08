// console.dir(document);

// //Gives the domain of the web page
// console.log(document.domain);

// //Gives the URL of the web page
// console.log(document.URL);

// //The document attribute can access different elements
// console.log(document.title);


// console.log(document.doctype);


// console.log(document.head);

// console.log(document.body);

// console.log(document.all);


//Targeting the index number
// console.log(document.all[10]);
// I am changing the name of the title by acessing it with its index number
// document.all[10].textContent = "Changing the header";

// console.log(documents.forms);
// console.log(document.links);
// console.log(document.images);

/////////////////

//GetElementByID

// getting element by ID
// console.log(document.getElementById('header-title'));

// //Another way of getting element ID using declaration variable let
// let headerTitle = document.getElementById('header-title');

// // both .textContent and .innerText function the same way
// headerTitle.textContent = "changed the title again";

// headerTitle.innerText = "changed again";

// // using style css to change the color of the title
// headerTitle.style.color = 'hotpink';

//////////////////////

// GetElementByClassName

// Im using a declaration statment 'var'
// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// Im using index number in array to style specific areas in the items list
// items[1].style.fontWeight = 'bold';
// items[1].textContent = 'Hello';
// items[1].style.color = 'blue';
// items[1].style.backgroundColor = 'red';

// items[0].style.fontWeight = 'bold';
// items[0].textContent = 'This is Fun';
// items[0].style.color = 'pink';
// items[0].style.backgroundColor = 'green';

// items[2].style.fontWeight = 'bold';
// items[2].textContent = 'yay';
// items[2].style.color = 'green';
// items[2].style.backgroundColor = 'pink';

// This is a for loop with starts at 1, has 10 values, and will incrememnt the value each time is runs the loop
// for(let i = 1; i <=10;i++) {
//     console.log(i);
// }

// This is a for loop which starts at 1, has 20 values, and will increment twice every loop
// for(let i = 1; i <=20; i+=2) {
//     console.log(i);
// }

// This is a for loop which has 100 values, and will decrement twice for each loop
// for(let i = 100; i >= 0; i-=2) {
//     console.log(i);
// }

// Now i will create a array of myDiamonds and create a for loop starting at index 0, and have it incremement by one each time.
// const myDiamonds=['snacky','scary','little','biggy','pinchie','tanky'];

// for(let i=0; i< myDiamonds.length; i++) {
//     console.log(i, myDiamonds[i]);
// }


// here i am using a for loop to increment each item in the list and change the style in the body of the loop
// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = "changes the list items";
//     items[i].style.color = 'white';
// }


//////////////GetElementByTagName

// declaring variable li and using the getElementsByTagName 
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);
// // using the var to change body style while refrencesing the index of 1, which is actually the second item on the list
// li[i].textContent ="hello";
// li[1].style.fontWeight = 'bold';
// li[1].backgroundColor = 'green';
// li[1].style.color = 'white';
// // using a for loop to increment through each item on the list and change the style in the body of the loop
// for(var i =o; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = "i changed the items form the DOM";
//     li[i].style.color = 'white';
// }

/////////////////////////////////////Query Selector

// now will use a query selector which will return the first element in the header to change the style and text
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px hotpink';

// // using query selector ot change the input value
// var input = document.querySelector('input');
// input.value = "I just changed the text value in the input box";

// // Now will use the query selector to target submit button attribute and change its value. 
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Hello Button";

// // using query selector to target the last item in the list
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// // using query selector to target a index in the items list 
// var otherItem = document.querySelector('.list-group-item:nth-child(2)');
// otherItem.style.color = 'orange';


///////////////////////////////////////
// using query selector all to target the class of title 
var titles = document.querySelectorAll('.title');
console.log(titles);

// targeting index 0 in class 'titles' to change the text content
titles[0].textContent = 'Hello!';

// creating variables for odd and even. and using the query selector to go throught all the items in the list
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
// Creating a for loop with the variable of i to target all items in the list and style them accordingly. 
for (var i = 0; i <odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}