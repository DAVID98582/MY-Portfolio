const greet = document.querySelector('#greet')

const date = new Date()
const hour = date.getHours();
const day = date.getDate();

if (hour < 12) {
    greet.textContent = 'Good Morning'
}else if (hour < 15) {
    greet.textContent = 'Good Day'
}else if (hour < 19) {
    greet.textContent = 'Good Evening'
}else {
    greet.textContent = 'Good Night'
}
if (day == 355) { 
    greet.textContent = 'Merry Christmas'
}

// if (condition) {
    
// } elseif {
    
// }

const year = new Date();
document.querySelector('#year').innerHTML = year.getFullYear();