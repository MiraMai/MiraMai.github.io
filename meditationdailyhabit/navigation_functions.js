let home_desktop = document.getElementById('home_desktop');
let home = document.getElementById('home');

let daily_habit_desktop = document.getElementById('daily_habit_desktop');    
let daily_habit = document.getElementById('daily_habit');  


   if(window.location.pathname === "/index.html") {
    home_desktop.className = 'active';
    console.log('found index');
    } 
    if(window.location.pathname === "/daily_habit.html") {
        daily_habit_desktop.className = 'active';
        console.log('found pathname');
    } else {
        console.log("could't find pathname");
    }

home_desktop.addEventListener('click', function() {
    window.location.pathname = "/index.html"
});

daily_habit_desktop.addEventListener('click', function() {
    window.location.pathname = "/daily_habit.html"
    
});

console.log('document.location', document.location.href);
console.log('location.pathname',  window.location.pathname); 
console.log('location.href', window.location.href);
