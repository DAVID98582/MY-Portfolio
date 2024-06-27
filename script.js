const greet = document.querySelector('.greet')

const date = new Date()
const hour = date.getHours();

if (hour < 12) {
    greet.textContent = 'Good Morning'
}
if (hour < 15) {
    greet.textContent = 'Good Day'
}
if (hour < 19) {
    greet.textContent = 'Good Evening'
}
if (hour < 24 ) {
    greet.textContent = 'Good Night'
}