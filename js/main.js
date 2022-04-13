function darkTheme() {
    // "use strict";
    //Dark Mode
    const toggleSwitch = document.getElementById('checkbox2');
    const currentTheme = localStorage.getItem('class');

    if (currentTheme) {
        document.body.setAttribute('class', currentTheme);
        
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }  

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.setAttribute('class', 'dark');
            localStorage.setItem('class', 'dark');  
        } else {
            document.body.setAttribute('class', 'light');
            localStorage.setItem('class', 'light'); 
        }
    } 

    toggleSwitch.addEventListener('change', switchTheme, false);
}