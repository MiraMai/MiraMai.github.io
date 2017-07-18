window.addEventListener('load', function() { // Windows load
    let ENbtn = document.getElementById('ENbtn');
    let SVbtn = document.getElementById('SVbtn');
    let swedish = document.getElementById('swedish');
    let english = document.getElementById('english');
    
    let aboutMeMenu = document.getElementById('aboutMeMenu');
    let skillsMenu = document.getElementById('skillsMenu');
    let educationMenu = document.getElementById('educationMenu');
    let employmentHistoryMenu = document.getElementById('employmentHistoryMenu');
    let languagesMenu = document.getElementById('languagesMenu');
    let contactMeMenu = document.getElementById('contactMe');
    
    
    let aboutMeSwedish = document.getElementById('aboutMeId');
    let aboutMeEnglish = document.getElementById('aboutMe');
    
    let skillsSwedish = document.getElementById('skillsId');
    let skillsEnglish = document.getElementById('skills');
    
    let educationSwedish = document.getElementById('educationId');
    let educationEnglish = document.getElementById('education');
    
    let employmentHistorySwedish = document.getElementById('employmentHistoryId');
    let employmentHistoryEnglish = document.getElementById('employmentHistory');
    
    let languagesSwedish = document.getElementById('languagesId');
    let languagesEnglish = document.getElementById('languages');
    
    let contactMeSwedish = document.getElementById('contactMeId');
    let contactMeEnglish = document.getElementById('contactMe');
    
    let portfolioSwedish = document.getElementById('portfolioId');
    let portfolioEnglish = document.getElementById('portfolio');
    
    
    swedish.style.display = 'none';
    
    
    
    ENbtn.addEventListener('click', function() {

//connects the language buttons with the content display        
        english.style.display = 'inline';
        swedish.style.display = 'none';
        
//sets the correct language to the menu items        
        aboutMeMenu.innerHTML = 'About me';
        skillsMenu.innerHTML = 'Proffessional Skills';
        educationMenu.innerHTML = 'Education';
        employmentHistoryMenu.innerHTML = 'Anställningar';
        languagesMenu.innerHTML = 'Languages';
        contactMeMenu.innerHTML = 'Contact me';
        
//changes the id of all the elements so that each time I change language the menu items will link to the elements
        aboutMeEnglish.id = 'aboutMe';
        aboutMeSwedish.id = 'aboutMeId';
        
        skillsEnglish.id = 'skills';
        skillsSwedish.id = 'skillsId';
        
        educationEnglish.id = 'education';
        educationSwedish.id = 'educationId';
        
        employmentHistoryEnglish.id = 'employmentHistory';
        employmentHistorySwedish.id = 'employmentHistoryId';
        
        languagesEnglish.id = 'languages';
        languagesSwedish.id = 'languagesId';
        
        contactMeEnglish.id = 'contactMe';
        contactMeSwedish.id = 'contactMeId';
        
        portfolioEnglish.id = 'portfolio';
        portfolioSwedish.id = 'portfolioId';
        
    });
    
    SVbtn.addEventListener('click', function() {
  

//connects the language buttons with the content display        
        swedish.style.display = 'inline';
        english.style.display = 'none';
        
//sets the correct language to the menu items
        aboutMeMenu.innerHTML = 'Om mig';
        skillsMenu.innerHTML = 'Professionella Färdigheter';
        educationMenu.innerHTML = 'Utbildningar';
        employmentHistoryMenu.innerHTML = 'Anställningar';
        languagesMenu.innerHTML = 'Språk';
        contactMeMenu.innerHTML = 'Kontakta mig';
        
//changes the id of all the elements so that each time I change language the menu items will link to the elements        
        aboutMeEnglish.id = 'aboutMeId';
        aboutMeSwedish.id = 'aboutMe';
        
        skillsSwedish.id = 'skills';
        skillsEnglish.id = 'skillsId';
        
        educationSwedish.id = 'education';
        educationEnglish.id = 'educationId';
        
        employmentHistorySwedish.id = 'employmentHistory';
        employmentHistoryEnglish.id = 'employmentHistoryId';
        
        languagesSwedish.id = 'languages';
        languagesEnglish.id = 'languagesId';
        
        contactMeSwedish.id = 'contactMe';
        contactMeEnglish.id = 'contactMeId';
        
        portfolioSwedish.id = 'portfolio';
        portfolioEnglish.id = 'portfolioId';
        
    });


});