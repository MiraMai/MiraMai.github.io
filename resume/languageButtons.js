window.addEventListener('load', function() { // Windows load
    let ENbtn = document.getElementById('ENbtn');
    let SVbtn = document.getElementById('SVbtn');
    let swedish = document.getElementById('swedish');
    let english = document.getElementById('english');
    let aboutMe = document.getElementById('aboutMe');
    let skills = document.getElementById('skills');
    let education = document.getElementById('education');
    let employmentHistory = document.getElementById('employmentHistory');
    let languages = document.getElementById('languages');
    let contactMe = document.getElementById('contactMe');
    
    swedish.style.display = 'none';
    
    
    
    ENbtn.addEventListener('click', function() {
        
        english.style.display = 'inline';
        swedish.style.display = 'none';
        aboutMe.innerHTML = 'About me';
        skills.innerHTML = 'Proffessional Skills';
        education.innerHTML = 'Education';
        employmentHistory.innerHTML = 'Anställningar';
        languages.innerHTML = 'Languages';
        contactMe.innerHTML = 'Contact me';
    });
    
    SVbtn.addEventListener('click', function() {
        
        swedish.style.display = 'inline';
        english.style.display = 'none';
        aboutMe.innerHTML = 'Om mig';
        skills.innerHTML = 'Professionella Färdigheter';
        education.innerHTML = 'Utbildningar';
        employmentHistory.innerHTML = 'Anställningar';
        languages.innerHTML = 'Språk';
        contactMe.innerHTML = 'Kontakta mig';
    });


});