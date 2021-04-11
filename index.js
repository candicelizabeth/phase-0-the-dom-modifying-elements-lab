// Write your code here!
let main = document.querySelector('#main')
main.remove() //remove main

let body = document.querySelector('body') //grab the body
let newHeader = document.createElement('h1') //create the h1
newHeader.id = 'victory' //add the ID
newHeader.innerHTML = "Candice is the champion" //add the text
body.appendChild(newHeader) //append it to the body 

