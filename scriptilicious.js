function toggleTheme(value) { 
  
  
    // Get the link element for the stylesheet
    var linkElement = document.getElementById('theme-stylesheet');
    
    // Obtain the name of stylesheet as a parameter and set it using href attribute.
    linkElement.href = value; 
    
    var sheets = document 
        .getElementsByTagName('link'); 

    sheets[0].href = value; 
}

// Cookies
// Responsive hamburger icon