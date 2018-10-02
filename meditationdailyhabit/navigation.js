//window.addEventListener('load', function() {

  let home = document.getElementById('home');
  let navigation__home = document.getElementById('navigation__home');

  let daily_habit = document.getElementById('daily_habit');
  let navigation__daily_habit = document.getElementById('navigation__daily_habit');

  let navigation___get_started = document.getElementById('navigation__get_started');

  let navigation__essentials = document.getElementById('navigation__essentials');

  let navigation__reviews = document.getElementById('navigation__reviews');

  let navigation__about = document.getElementById('navigation__about');

  let navigation__blog = document.getElementById('navigation__blog');
  

  
  // DISPLAY
  home.style.display = 'inline';
  daily_habit.style.display = 'none';

  // NAVIGATION STYLING
  // home
  navigation__home.style.color = '#ff9900';
  navigation__home.style.borderBottom = '1px solid #ff9900';
  // daily_habit
  navigation__daily_habit.style.color = '#777';
  navigation__daily_habit.style.borderBottom = '1px solid #bbb';
  // get_started
  navigation__get_started.style.color = '#777';
  navigation__get_started.style.borderBottom = '1px solid #bbb';
  // essentials
  navigation__essentials.style.color = '#777';
  navigation__essentials.style.borderBottom = '1px solid #bbb';
  // reviews
  navigation__reviews.style.color = '#777';
  navigation__reviews.style.borderBottom = '1px solid #bbb';
  // about
  navigation__about.style.color = '#777';
  navigation__about.style.borderBottom = '1px solid #bbb';
  // blog
  navigation__blog.style.color = '#777';
  navigation__blog.style.borderBottom = '1px solid #bbb';



  // WHEN CLICKING ON "HOME"
  navigation__home.addEventListener('click', function() {
    
        home.style.display = 'inline';
        daily_habit.style.display = 'none'; 

        navigation__home.style.color = '#ff9900';
        navigation__home.style.borderBottom = '1px solid #ff9900';
        //
        navigation__daily_habit.style.color = '#777';
        navigation__daily_habit.style.borderBottom = '1px solid #bbb';

  });  

  // WHEN CLICKING ON "HOW TO MAKE MEDITATION A DAILY HABIT"
  navigation__daily_habit.addEventListener('click', function() {

    home.style.display = 'none';    
    daily_habit.style.display = 'inline';

    navigation__home.style.color = '#777';
    navigation__home.style.borderBottom = '1px solid #bbb';
    //
    navigation__daily_habit.style.color = '#ff9900';
    navigation__daily_habit.style.borderBottom = '1px solid #ff9900';
    
  });   



//});  